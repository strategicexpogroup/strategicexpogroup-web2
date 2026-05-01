"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function SiteLockForm() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const nextPath = searchParams.get("next") || "/";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/unlock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ pin })
      });

      if (!response.ok) {
        setError("PIN incorrecto. Intenta nuevamente.");
        return;
      }

      router.push(nextPath);
      router.refresh();
    } catch {
      setError("No fue posible validar el PIN. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 w-full max-w-sm space-y-3">
      <label htmlFor="pin" className="block text-sm font-medium text-brand-text">
        PIN de acceso
      </label>
      <input
        id="pin"
        type="password"
        inputMode="numeric"
        pattern="[0-9]{4}"
        maxLength={4}
        autoComplete="one-time-code"
        placeholder="••••"
        value={pin}
        onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-center text-xl tracking-[0.35em] outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
        required
      />
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? "Validando..." : "Ingresar"}
      </button>
    </form>
  );
}
