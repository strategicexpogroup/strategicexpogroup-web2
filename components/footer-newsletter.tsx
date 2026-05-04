"use client";

import { Send } from "lucide-react";

export function FooterNewsletter() {
  return (
    <form
      className="mt-3 flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Gracias por suscribirte. Te mantendremos informado.");
        (e.target as HTMLFormElement).reset();
      }}
      aria-label="Newsletter"
    >
      <label htmlFor="footer-email" className="sr-only">
        Correo electrónico
      </label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder="Tu correo"
        className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-brand-accent/60"
      />
      <button
        type="submit"
        className="flex shrink-0 items-center justify-center rounded-lg bg-brand-accent px-3 py-2 text-white transition hover:bg-brand-accent/90"
        aria-label="Enviar suscripción"
      >
        <Send className="h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}
