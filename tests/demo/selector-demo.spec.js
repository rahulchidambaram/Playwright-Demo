import { test, expect } from "@playwright/test";

test("Selectors Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // To open the Playwright Inspector
  await page.pause();

  // using object property
  await page.locator("id=user-name").fill("Rahul");

  //   using css selector
  await page.locator("#login-button").click();

  // using x path
  await page.locator("//input[@id='user-name']").fill("Rahul x-path");

  //using text
  await page.locator("text=LOGIN").click();
  await page.locator("input:has-text('LOGIN')").click();
});
