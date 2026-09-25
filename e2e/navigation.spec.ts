import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Home page renders", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("Site banner expands and collapses", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Here’s how you know" });
    const content = page.locator("#banner-pane");

    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(content).toBeHidden();
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(content).toBeVisible();
    await toggle.click();
    await expect(content).toBeHidden();
  });

  test("USWDS modal initializes and tears down across routes", async ({ page }) => {
    await page.goto("/hero-overlay");
    await page.locator("[data-open-modal]").click();
    await expect(page.getByRole("heading", { name: "Do you agree?" })).toBeVisible();
    await page.getByRole("button", { name: "Close this window" }).click();

    await page.goto("/");
    await expect(page.locator(".usa-modal-wrapper")).toHaveCount(0);
    await page.goto("/hero-overlay");
    await expect(page.locator(".usa-modal-wrapper")).toHaveCount(1);
  });
});
