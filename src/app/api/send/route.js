import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  await resend.sendEmail({
    from: "YOUR NAME <onboarding@resend.dev>",
    to: [fromEmail, email],
    subject: subject,
    react: (
      <>
        <p>Thanks for sending an email, i hope to get back to you soon</p>
      </>
    ),
  });
  return NextResponse.json({
    status: "ok",
  });
}
