import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_dB6Mmfsx_7wiihAiV56aF2KNvkGfWpq3s");
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
