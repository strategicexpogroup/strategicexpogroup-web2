import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Strategic Expo Group",
    short_name: "Strategic Expo",
    description:
      "Organizamos ferias, congresos y exposiciones que impulsan negocios, fortalecen comunidades y proyectan el desarrollo de la región.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9FAFB",
    theme_color: "#1E3A8A",
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
