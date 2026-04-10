import { resolve } from "path";
import { defineConfig } from "vitest/config";
import angular from "@analogjs/vite-plugin-angular";

export default defineConfig({
  plugins: [angular()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [
          resolve(__dirname, "node_modules/@uswds/uswds/packages"),
          resolve(__dirname, ".")
        ]
      }
    }
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/app/components"),
      "@services": resolve(__dirname, "src/app/services"),
      src: resolve(__dirname, "src")
    }
  },
  test: {
    globals: true,
    setupFiles: ["./setup-vitest.ts"],
    environment: "jsdom",
    include: ["src/**/*.spec.ts"],
    exclude: ["e2e/**"],
    coverage: {
      provider: "v8",
      include: ["src/app/**/*.ts"],
      exclude: ["src/main.ts", "src/**/*.module.ts", "src/**/*.routing.ts"],
      reporter: ["json-summary", "text", "lcov", "json"],
      thresholds: {
        branches: 60,
        functions: 70,
        lines: 85,
        statements: 85
      }
    }
  }
});
