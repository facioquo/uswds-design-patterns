import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly: !!process.env["CI"],
  retries: process.env["CI"] ? 2 : 0,
  workers: process.env["CI"] ? 2 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: process.env["PLAYWRIGHT_BASE_URL"] ?? "http://localhost:4200",
    trace: "on-first-retry",
    video: process.env["CI"] ? "retain-on-failure" : "on",
    screenshot: "only-on-failure",
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],

  webServer: [
    {
      command: "npm run start:test",
      url: "http://localhost:4200",
      reuseExistingServer: !process.env["CI"],
      timeout: 120_000,
    },
  ],
});
