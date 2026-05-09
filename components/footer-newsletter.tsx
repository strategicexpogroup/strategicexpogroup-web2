"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { contactData } from "@/lib/data";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [companyHoneypot, setCompanyHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form
      className="mt-3"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMessage("");
        try {
          const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, company: companyHoneypot })
          });
          const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; code?: string };

          if (!res.ok) {
            setStatus("error");
            if (data.code === "NOT_CONFIGURED") {
              setErrorMessage(
                "Suscripción web no activada aún. Escríbenos a " + contactData.email + " para recibir novedades."
              );
            } else {
              setErrorMessage(data.error || "No se pudo registrar. Intenta de nuevo.");
            }
            return;
          }

          setStatus("success");
          setEmail("");
          setCompanyHoneypot("");
        } catch {
          setStatus("error");
          setErrorMessage("Error de red. Intenta más tarde o escríbenos a " + contactData.email + ".");
        }
      }}
      aria-label="Newsletter"
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            name="company"
            value={companyHoneypot}
            onChange={(e) => setCompanyHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
            aria-hidden
          />
          <label htmlFor="footer-email" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="footer-email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error" || status === "success") setStatus("idle");
            }}
            disabled={status === "sending"}
            placeholder="Tu correo"
            className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-brand-accent/60 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex shrink-0 items-center justify-center rounded-lg bg-brand-accent px-3 py-2 text-white transition hover:bg-brand-accent/90 disabled:opacity-60"
            aria-label="Enviar suscripción"
          >
            <Send className="h-4 w-4" aria-hidden />
          </button>
        </div>
        {status === "success" && (
          <p className="text-xs text-emerald-200" role="status">
            Listo. Revisa tu bandeja (y spam) por novedades.
          </p>
        )}
        {status === "error" && errorMessage && (
          <p className="text-xs text-amber-200" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
