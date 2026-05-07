"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { assetPaths } from "@/lib/assets";
import { fairs } from "@/lib/data";

const feriaLinks = fairs.map((f) => ({
  href: `/nuestras-ferias/${f.slug}`,
  label: f.name
}));

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [feriasOpen, setFeriasOpen] = useState(false);

  const navMuted = "text-sm font-medium text-brand-muted transition-colors hover:text-brand-primary";
  const navActive = "text-sm font-medium text-brand-primary border-b-2 border-brand-primary pb-0.5";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={assetPaths.logos.main}
            alt="Strategic Expo Group"
            width={220}
            height={40}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Navegación principal">
          <Link href="/" className={pathname === "/" ? navActive : navMuted}>
            Inicio
          </Link>
          <Link href="/nosotros" className={pathname.startsWith("/nosotros") ? navActive : navMuted}>
            Nosotros
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setFeriasOpen(true)}
            onMouseLeave={() => setFeriasOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 border-0 pb-0 ${
                pathname.startsWith("/nuestras-ferias") ? navActive : navMuted
              }`}
              aria-expanded={feriasOpen}
              aria-haspopup="true"
            >
              Ferias
              <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
            </button>
            {feriasOpen && (
              <div
                className="absolute left-0 top-full z-50 min-w-[220px] rounded-xl border border-slate-200 bg-white py-2 shadow-lg"
                role="menu"
              >
                <Link href="/nuestras-ferias" className="block px-4 py-2 text-sm text-brand-text hover:bg-brand-neutral">
                  Ver todas
                </Link>
                {feriaLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-brand-muted hover:bg-brand-neutral hover:text-brand-primary"
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/patrocinadores" className={pathname.startsWith("/patrocinadores") ? navActive : navMuted}>
            Patrocinadores
          </Link>
          <Link href="/stands" className={pathname.startsWith("/stands") ? navActive : navMuted}>
            Stands
          </Link>
          <Link href="/noticias" className={pathname.startsWith("/noticias") ? navActive : navMuted}>
            Noticias
          </Link>
          <Link href="/contacto" className={pathname === "/contacto" ? navActive : navMuted}>
            Contacto
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contacto?motivo=patrocinio"
            className="btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Sé patrocinador
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="rounded-md p-2 text-brand-primary transition hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200 bg-white lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Navegación móvil">
              <Link href="/" className="py-3 text-sm font-medium text-brand-text" onClick={() => setOpen(false)}>
                Inicio
              </Link>
              <Link href="/nosotros" className="py-3 text-sm font-medium text-brand-text" onClick={() => setOpen(false)}>
                Nosotros
              </Link>
              <div className="border-t border-slate-100 py-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Ferias</p>
                <Link
                  href="/nuestras-ferias"
                  className="block py-2 text-sm text-brand-text"
                  onClick={() => setOpen(false)}
                >
                  Ver todas
                </Link>
                {feriaLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-brand-muted"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link href="/patrocinadores" className="py-3 text-sm font-medium" onClick={() => setOpen(false)}>
                Patrocinadores
              </Link>
              <Link href="/stands" className="py-3 text-sm font-medium" onClick={() => setOpen(false)}>
                Stands
              </Link>
              <Link href="/noticias" className="py-3 text-sm font-medium" onClick={() => setOpen(false)}>
                Noticias
              </Link>
              <Link href="/contacto" className="py-3 text-sm font-medium" onClick={() => setOpen(false)}>
                Contacto
              </Link>
              <Link
                href="/contacto?motivo=patrocinio"
                className="btn-primary mt-2 justify-center gap-2"
                onClick={() => setOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                Sé patrocinador
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
