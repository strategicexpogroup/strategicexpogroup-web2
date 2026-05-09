"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { contactData } from "@/lib/data";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [segHp, setSegHp] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form
      className="relative mt-3"
      onSubmit={async (e) => {
        e.preventDefault();
        if (segHp.trim().length > 0) {
          setStatus("success");
          return;
        }

        setStatus("sending");
        setErrorMessage("");

        const ac = new AbortController();
        const tid = setTimeout(() => ac.abort(), 28_000);

        try {
          const res = await fetch("/api/web3forms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ kind: "newsletter", email, _seg_hp: segHp }),
            signal: ac.signal
          });
          const data = (await res.json().catch(() => ({}))) as {
            ok?: boolean;
            error?: string;
            code?: string;
          };

          if (!res.ok) {
            setStatus("error");
            if (data.code === "NOT_CONFIGURED") {
              setErrorMessage(
                "Newsletter no configurado en el servidor. Escríbenos a " + contactData.email + "."
              );
            } else {
              setErrorMessage(data.error || "No se pudo registrar. Intenta de nuevo.");
            }
            return;
          }

          setStatus("success");
          setEmail("");
          setSegHp("");
        } catch (err) {
          setStatus("error");
          const aborted = err instanceof Error && err.name === "AbortError";
          setErrorMessage(
            aborted
              ? "Tiempo de espera agotado. Intenta de nuevo."
              : "Error de red. Intenta más tarde o escríbenos a " + contactData.email + "."
          );
        } finally {
          clearTimeout(tid);
        }
      }}
      aria-label="Newsletter"
    >
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="_seg_hp"
          value={segHp}
          onChange={(e) => setSegHp(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="pointer-events-none absolute left-0 top-0 h-px w-px opacity-0"
          aria-hidden
        />
        <div className="flex gap-2">
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
