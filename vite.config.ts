import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { aeoVitePlugin } from "aeo.js/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    aeoVitePlugin({
      title: "João Paulo Pessoa | Software Engineer Full Stack",
      description:
        "Portfolio of João Paulo Pessoa — Full Stack Software Engineer with 4+ years of experience in React, Next.js, TypeScript, and Node.js.",
      url: "https://codewithjohnny.com.br",
      schema: {
        enabled: true,
        organization: {
          name: "Code With Johnny",
          url: "https://codewithjohnny.com.br",
        },
        defaultType: "WebPage",
      },
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
