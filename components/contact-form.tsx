"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { contactData } from "@/lib/data";

const motives = [
  { value: "stand", label: "Stand" },
  { value: "patrocinio", label: "Patrocinio" },
  { value: "informacion-general", label: "Información general" },
  { value: "otro", label: "Otro" }
] as const;

const fieldClass =
  "w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition-colors duration-200";

export function ContactForm() {
  const params = useSearchParams();
  const motivoInicial = useMemo(() => {
    const raw = params.get("motivo");
    if (raw === "stand" || raw === "patrocinio") {
      return raw;
    }
    return "informacion-general";
  }, [params]);

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
    motivo: motivoInicial
  });
  const [companyHoneypot, setCompanyHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setFormData((prev) => ({ ...prev, motivo: motivoInicial }));
  }, [motivoInicial]);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          company: companyHoneypot
        })
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; code?: string };

      if (!res.ok) {
        setStatus("error");
        if (data.code === "NOT_CONFIGURED") {
          setErrorMessage(
            "El envío desde la web aún no está activado en el servidor. Escríbenos directamente a " +
              contactData.email +
              "."
          );
        } else {
          setErrorMessage(data.error || "No se pudo enviar el mensaje. Intenta de nuevo o escríbenos por correo.");
        }
        return;
      }

      setStatus("success");
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: "",
        motivo: motivoInicial
      });
      setCompanyHoneypot("");
    } catch {
      setStatus("error");
      setErrorMessage("Error de red. Comprueba tu conexión o escríbenos a " + contactData.email + ".");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
    >
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
      <div className="grid gap-4 sm:grid-cols-2">
        <label
          data-variant={0}
          className="contact-field flex flex-col gap-2 rounded-lg p-0.5 text-sm font-medium text-brand-text transition-colors"
        >
          Nombre
          <input
            required
            value={formData.nombre}
            onChange={(e) => handleChange("nombre", e.target.value)}
            className={fieldClass}
          />
        </label>
        <label
          data-variant={1}
          className="contact-field flex flex-col gap-2 rounded-lg p-0.5 text-sm font-medium text-brand-text transition-colors"
        >
          Correo electrónico
          <input
            required
            type="email"
            value={formData.correo}
            onChange={(e) => handleChange("correo", e.target.value)}
            className={fieldClass}
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label
          data-variant={2}
          className="contact-field flex flex-col gap-2 rounded-lg p-0.5 text-sm font-medium text-brand-text transition-colors"
        >
          Teléfono
          <input
            required
            value={formData.telefono}
            onChange={(e) => handleChange("telefono", e.target.value)}
            className={fieldClass}
          />
        </label>
        <label
          data-variant={3}
          className="contact-field flex flex-col gap-2 rounded-lg p-0.5 text-sm font-medium text-brand-text transition-colors"
        >
          Motivo
          <select
            required
            value={formData.motivo}
            onChange={(e) => handleChange("motivo", e.target.value)}
            className={fieldClass}
          >
            {motives.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label
        data-variant={0}
        className="contact-field mt-4 flex flex-col gap-2 rounded-lg p-0.5 text-sm font-medium text-brand-text transition-colors"
      >
        Mensaje
        <textarea
          required
          rows={5}
          value={formData.mensaje}
          onChange={(e) => handleChange("mensaje", e.target.value)}
          className={fieldClass}
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="seg-brand-hover btn-primary mt-6 disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900" role="status">
          Mensaje enviado. Te responderemos pronto al correo que indicaste.
        </p>
      )}
      {status === "error" && errorMessage && (
        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
