import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Documentation",
      logo: {
        src: "./public/branding/assets/img/logo/glyph.svg",
      },
      social: {
        email: "mailto:support@codeanywhere.net",
        "x.com": "https://x.com/codeanywhere",
        linkedin: "https://www.linkedin.com/codeanywhere",
        github: "https://github.com/codeanywhere",
      },
      customCss: ["./src/styles/index.css"],
      components: {
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      sidebar: [
        {
          label: "Configuration",
          autogenerate: { directory: "configuration" },
        },
        {
          label: "Editor",
          autogenerate: { directory: "editor" },
        },
        {
          label: "Workspaces",
          autogenerate: { directory: "workspaces" },
        },
      ],
    }),
  ],
});
