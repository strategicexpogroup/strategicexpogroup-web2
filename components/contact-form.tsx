"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const motives = [
  { value: "stand", label: "Stand" },
  { value: "patrocinio", label: "Patrocinio" },
  { value: "informacion-general", label: "Información general" },
  { value: "otro", label: "Otro" }
] as const;

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

  useEffect(() => {
    setFormData((prev) => ({ ...prev, motivo: motivoInicial }));
  }, [motivoInicial]);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Mensaje enviado con éxito. Gracias por contactarnos.");
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
      motivo: motivoInicial
    });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-brand-text">
          Nombre
          <input
            required
            value={formData.nombre}
            onChange={(e) => handleChange("nombre", e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-brand-text">
          Correo electrónico
          <input
            required
            type="email"
            value={formData.correo}
            onChange={(e) => handleChange("correo", e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-brand-text">
          Teléfono
          <input
            required
            value={formData.telefono}
            onChange={(e) => handleChange("telefono", e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-brand-text">
          Motivo
          <select
            required
            value={formData.motivo}
            onChange={(e) => handleChange("motivo", e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          >
            {motives.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-brand-text">
        Mensaje
        <textarea
          required
          rows={5}
          value={formData.mensaje}
          onChange={(e) => handleChange("mensaje", e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
        />
      </label>

      <button
        type="submit"
        className="btn-primary mt-6"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
