import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserSite = repository && owner && repository.toLowerCase() === `${owner}.github.io`.toLowerCase();
const base = process.env.GITHUB_ACTIONS === "true" && repository && !isUserSite ? `/${repository}/` : "/";

export default defineConfig({
  plugins: [vue()],
  base,
  server: { host: "127.0.0.1", port: 3000 },
});
