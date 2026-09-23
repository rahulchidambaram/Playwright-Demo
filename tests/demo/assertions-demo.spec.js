import { test, expect } from "@playwright/test";

test("Assertions Demo", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  await page.pause();

  //Assertions
  // check element is present or not
  await expect(page.locator("text=The Kitchen")).toHaveCount(1);

  // check element is visible or not
  await expect(page.locator("text=The Kitchen")).toBeVisible();
  //   await expect.soft(page.locator("text=The Kitchen")).toBeHidden();

  // check element is enabled or not
  await expect(page.locator("text=The Kitchen")).toBeEnabled();
  //   await expect.soft(page.locator("text=The Kitchen")).toBeDisabled();

  // check text
  await expect(page.locator("text=The Kitchen")).toHaveText("The Kitchen");
  //   await expect
  //     .soft(page.locator("text=The Kitchen"))
  //     .not.toHaveText("The Kitchen");

  //   await expect(page.locator("text=The Kitchen")).toHaveAttribute(
  //     "class",
  //     /.*css-zey6tx/,
  //   );

  // check url and title
  await expect(page).toHaveURL("https://kitchen.applitools.com/");
  await expect(page).toHaveTitle(/.*The Kitchen/);

  await page.pause();
  // Visual validation with screenshot
  await expect(page).toHaveScreenshot();
});
