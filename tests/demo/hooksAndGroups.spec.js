import { test } from "@playwright/test";

test.describe("Hooks and Groups", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://saucedemo.com/");

    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("error_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
  });

  test("homepage", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
  });

  test("Logout", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await page.waitForURL("https://www.saucedemo.com/");
  });
});
