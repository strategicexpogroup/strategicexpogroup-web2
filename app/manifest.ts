import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Strategic Expo Group",
    short_name: "Strategic Expo",
    description:
      "Organizamos ferias, congresos y exposiciones que impulsan negocios, fortalecen comunidades y proyectan el desarrollo de la región.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F9FA",
    theme_color: "#002855",
    lang: "es-CO",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
