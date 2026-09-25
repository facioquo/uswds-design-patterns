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

  test("USWDS modal tears down when leaving the route while open", async ({ page }) => {
    await page.goto("/hero-overlay");

    for (let cycle = 0; cycle < 3; cycle++) {
      await expect(page.locator(".usa-modal-wrapper")).toHaveCount(1);
      await page.locator("[data-open-modal]").click();
      await expect(page.getByRole("heading", { name: "Do you agree?" })).toBeVisible();

      // The modal overlay covers the page, so dispatch the router link click directly
      // to leave the route while the modal is still open.
      await page.locator("a", { hasText: "More patterns" }).evaluate((link: HTMLElement) => {
        link.click();
      });
      await expect(page).toHaveURL(/\/#design-patterns$/);
      await expect(page.locator(".usa-modal-wrapper")).toHaveCount(0);
      await expect(page.locator("[data-modal-hidden]")).toHaveCount(0);
      await expect(page.locator("body")).not.toHaveClass(/usa-js-modal--active/);

      await page.goBack();
      await expect(page).toHaveURL(/\/hero-overlay$/);
    }
  });
});
