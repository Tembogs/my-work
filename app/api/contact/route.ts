import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
  from: "Acme <onboarding@resend.dev>", // must be a verified sender
  to: "temmytizzy201@gmail.com",
  subject: `New message from ${name}`,
  html: `
    <div style="
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      padding: 20px;
      background-color: #f9f9f9;
    ">
      <h2 style="color: #1e40af;">New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="padding: 10px 15px; background-color: #e0e7ff; border-radius: 5px;">
        ${message}
      </p>
      <footer style="margin-top: 20px; font-size: 0.9em; color: #555;">
        Sent via MyPortfolio
      </footer>
    </div>
  `,
});


    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Failed to send" });
  }
}
