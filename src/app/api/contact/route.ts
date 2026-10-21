import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const field = (k: string, max = 200) => String(body[k] ?? "").trim().slice(0, max);
  const name = field("name");
  const email = field("email");
  const phone = field("phone", 40);
  const company = field("company");
  const service = field("service");
  const message = field("message", 5000);

  // Honeypot: bots fill hidden fields; pretend success
  if (field("website")) return NextResponse.json({ ok: true });

  if (!name || !isEmail(email) || message.length < 5) {
    return NextResponse.json({ error: "Please provide your name, a valid email and a message." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP environment variables are not configured.");
    return NextResponse.json({ error: "Email service is not configured yet." }, { status: 500 });
  }

  const port = Number(SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Company", company || "—"],
    ["Service", service || "—"],
  ];

  const html = `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #eee;border-radius:12px;overflow:hidden">
    <div style="background:#ed1c24;color:#fff;padding:20px 24px;font-size:18px;font-weight:bold">New enquiry from brainstormbd.com</div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      ${rows.map(([k, v]) => `<tr><td style="padding:10px 24px;color:#6d6e71;width:120px;border-bottom:1px solid #f1f1f1">${k}</td><td style="padding:10px 24px;color:#231f20;border-bottom:1px solid #f1f1f1">${escape(v)}</td></tr>`).join("")}
    </table>
    <div style="padding:20px 24px;font-size:14px;color:#231f20;white-space:pre-wrap;line-height:1.6">${escape(message)}</div>
  </div>`;

  try {
    await transporter.sendMail({
      from: `"Brainstorm Website" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `Website enquiry: ${service || "General"} — ${name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Could not send your message right now. Please email us directly." }, { status: 502 });
  }
}
