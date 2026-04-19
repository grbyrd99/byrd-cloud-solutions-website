const { app } = require("@azure/functions");
const { EmailClient } = require("@azure/communication-email");
const { SmsClient } = require("@azure/communication-sms");

const CONNECTION_STRING = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
const FROM_EMAIL = "gary@byrdcloud.io";
const TO_EMAIL = "gary@byrdcloud.io";
const FROM_PHONE = "+18776277170";
const TO_PHONE = "+13147061653";

app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    try {
      const body = await request.json();
      const { name, email, subject, message } = body;

      if (!name || !email || !message) {
        return {
          status: 400,
          jsonBody: { error: "Name, email, and message are required." },
        };
      }

      const emailClient = new EmailClient(CONNECTION_STRING);
      const emailMessage = {
        senderAddress: FROM_EMAIL,
        recipients: { to: [{ address: TO_EMAIL }] },
        content: {
          subject: `Contact Form: ${subject || "New message from " + name}`,
          plainText: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\n${message}`,
          html: `
            <h2 style="color:#1b3a6b;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || "N/A"}</p>
            <hr/>
            <p>${message.replace(/\n/g, "<br/>")}</p>
          `,
        },
      };

      const poller = await emailClient.beginSend(emailMessage);
      await poller.pollUntilDone();

      // SMS notification — active once carrier verification completes
      try {
        const smsClient = new SmsClient(CONNECTION_STRING);
        const preview = message.length > 80 ? message.substring(0, 80) + "..." : message;
        await smsClient.send({
          from: FROM_PHONE,
          to: [TO_PHONE],
          message: `Byrd Cloud Solutions: New contact from ${name} (${email}): "${preview}" Reply STOP to opt out.`,
        });
      } catch (smsError) {
        // Log SMS failure but don't fail the whole request
        context.log("SMS notification failed (may still be pending verification):", smsError.message);
      }

      return {
        status: 200,
        jsonBody: { success: true },
      };
    } catch (error) {
      context.log("Error sending email:", error);
      return {
        status: 500,
        jsonBody: { error: "Failed to send message. Please try again." },
      };
    }
  },
});
