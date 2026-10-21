"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services, site } from "@/lib/site";

type Status = { type: "idle" | "sending" | "success" | "error"; message?: string };

const input =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-ink outline-none transition placeholder:text-steel/60 focus:border-brand focus:ring-4 focus:ring-brand/10";

export default function ContactForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ type: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setStatus({ type: "success", message: "Thank you! Your message has been sent. We'll get back to you shortly." });
    } catch (err) {
      setStatus({
        type: "error",
        message: `${err instanceof Error ? err.message : "Something went wrong."} You can also email ${site.email}.`,
      });
    }
  }

  if (status.type === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-12 text-center shadow-xl">
        <CheckCircle2 className="h-16 w-16 text-brand" />
        <h3 className="mt-6 text-2xl font-bold text-ink">Message sent!</h3>
        <p className="mt-3 max-w-sm text-steel">{status.message}</p>
        <button type="button" onClick={() => setStatus({ type: "idle" })} className="mt-8 rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">
      <h3 className="text-2xl font-bold text-ink">Send us a message</h3>
      <p className="mt-2 text-steel">Fill in the form and our team will reply by email.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">Your name *</span>
          <input name="name" required maxLength={200} className={input} placeholder="John Doe" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">Email address *</span>
          <input name="email" type="email" required maxLength={200} className={input} placeholder="you@company.com" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">Phone</span>
          <input name="phone" type="tel" maxLength={40} className={input} placeholder="+880 1XXX XXXXXX" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">Company</span>
          <input name="company" maxLength={200} className={input} placeholder="Company name" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-ink">Service of interest</span>
          <select name="service" defaultValue={params.get("service") ?? ""} className={input}>
            <option value="">General enquiry</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-ink">Message *</span>
          <textarea name="message" required minLength={5} maxLength={5000} rows={5} className={`${input} resize-y`} placeholder="Tell us about your requirement, quantity and timeline…" />
        </label>
        {/* Honeypot */}
        <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      </div>

      {status.type === "error" && (
        <p className="mt-5 rounded-xl bg-brand/10 px-4 py-3 text-sm font-medium text-brand-dark" role="alert">{status.message}</p>
      )}

      <button
        type="submit"
        disabled={status.type === "sending"}
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-dark disabled:opacity-70 sm:w-auto"
      >
        {status.type === "sending" ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Sending…</>
        ) : (
          <><Send className="h-5 w-5 transition-transform group-hover:translate-x-1" /> Send Message</>
        )}
      </button>
    </form>
  );
}
