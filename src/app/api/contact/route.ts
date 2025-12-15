export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const BodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = BodySchema.parse(json);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[/api/contact] Missing RESEND_API_KEY");
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      console.error("[/api/contact] Missing CONTACT_TO_EMAIL");
      return NextResponse.json(
        { ok: false, error: "Email recipient not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // send the email
    await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: body.email,
      subject: `New message from ${body.name}`,
      text: `From: ${body.name} <${body.email}>\n\n${body.message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] error:", err);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}