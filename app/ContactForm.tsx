"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4bbfbf]"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4bbfbf]"
          required
        />
      </div>
      <input
        type="text"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4bbfbf]"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell us about your project..."
        rows={5}
        className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4bbfbf] resize-none"
        required
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#1b3a6b] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#4bbfbf] transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-green-600 text-center font-medium">
          Message sent! We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-center font-medium">
          Something went wrong. Please try again or email us directly at gary@byrdcloud.io
        </p>
      )}
    </form>
  );
}
