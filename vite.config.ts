import { reactRouter } from "@react-router/dev/vite";
import { reactRouterHonoServer } from "@resolid/react-router-hono/dev";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ isSsrBuild }) => {
  return {
    plugins: [
      reactRouterHonoServer({
        entryFile: "server.node.ts",
      }),
      reactRouter(),
      tailwindcss(),
      tsconfigPaths(),
    ].filter(Boolean),
    build: {
      target: isSsrBuild ? "node22" : "modules",
      cssTarget: ["edge88", "firefox78", "chrome87", "safari14"],
      rollupOptions: {
        output: {
          manualChunks: isSsrBuild
            ? undefined
            : (id) => {
                if (
                  id.includes("/node_modules/react/") ||
                  id.includes("/node_modules/react-dom/") ||
                  id.includes("/node_modules/react-is/") ||
                  id.includes("/node_modules/scheduler/")
                ) {
                  return "react";
                }

                if (
                  id.includes("/node_modules/react-router/") ||
                  id.includes("react-router/with-props") ||
                  id.includes("/node_modules/turbo-stream/")
                ) {
                  return "react-router";
                }
              },
        },
      },
    },
  };
});
