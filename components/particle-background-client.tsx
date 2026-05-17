"use client";

import dynamic from "next/dynamic";

// `ssr: false` is only valid inside a Client Component
const ParticleBackground = dynamic(
  () =>
    import("@/components/particle-background").then(
      (m) => m.ParticleBackground
    ),
  { ssr: false }
);

export { ParticleBackground };