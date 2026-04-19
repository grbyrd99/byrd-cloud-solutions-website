const { app } = require("@azure/functions");
const { EmailClient } = require("@azure/communication-email");

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

      const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
      const emailClient = new EmailClient(connectionString);

      const emailMessage = {
        senderAddress: "gary@byrdcloud.io",
        recipients: {
          to: [{ address: "gary@byrdcloud.io" }],
        },
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
