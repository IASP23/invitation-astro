import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: true,
  },
  site: "https://IASP23.github.io",
  base: "/Invitation-astro",
});
