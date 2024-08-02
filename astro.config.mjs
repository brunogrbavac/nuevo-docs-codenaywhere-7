import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import astroI18next from "astro-i18next";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();
export default defineConfig({
  outDir: "dist/apps/docs",
  server: {
    port: Number(process.env.PORT) || 1234,
    host: true,
  },
  integrations: [
    starlight({
      title: "Documentation",
      logo: {
        src: "./public/branding/assets/img/logo/glyph.svg",
      },
      social: {
        email: "mailto:support@codeanywhere.net",
        "x.com": "https://x.com/codeanywhere",
        github: "https://github.com/codeanywhere",
      },
      customCss: ["./src/styles/index.css"],
      components: {
        Card: './src/components/Card.astro',
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
        Head: "./src/components/Head.astro",
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
    astroI18next(),
  ],
});
