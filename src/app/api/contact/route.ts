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

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = BodySchema.parse(json);

    if (!process.env.CONTACT_TO_EMAIL) {
      throw new Error("Missing CONTACT_TO_EMAIL");
    }

    // send the email
    await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "Portfolio <no-reply@your-domain.com>", // must be a verified domain in Resend
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