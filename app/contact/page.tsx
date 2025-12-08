"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred.");
    }
  };

  return (
    <main className="min-h-screen text-black flex items-center justify-center bg-gray-100 p-4 sm:p-6 md:p-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-6 sm:p-8 md:p-10 rounded-lg shadow-lg flex flex-col gap-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black">Contact Me</h1>

        <label className="block font-medium">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="block font-medium">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block font-medium">Message</label>
        <textarea
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mt-2"
        >
          Send Message
        </button>

        {status && (
          <p className="mt-4 text-center text-gray-700">{status}</p>
        )}
      </form>
    </main>
  );
}
