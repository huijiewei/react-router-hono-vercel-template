import type { Config } from "@react-router/dev/config";
import { nodePreset } from "@resolid/react-router-hono/node-preset";
import { vercelPreset } from "@resolid/react-router-hono/vercel-preset";
import { env } from "node:process";

export default {
  ssr: true,
  presets: [
    env.VERCEL == "1"
      ? vercelPreset({
          regions: ["sin1"],
          entryFile: "server.vercel.ts",
          nodeVersion: 22,
        })
      : nodePreset({
          entryFile: "server.node.ts",
          nodeVersion: 22,
        }),
  ],
} satisfies Config;
