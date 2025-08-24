import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Home page renders", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("main")).toBeVisible();
  });
});
