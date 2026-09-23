import { test } from "@playwright/test";

test("Login Page 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  await page.pause();

  await page.locator("#username").fill("rahul");
  await page.locator("#password").fill("admin");

  await page.waitForSelector("#log-in", { timeout: 5000 });
  await page.locator("[id='log-in']").click();
});

test.only("Login Page 2", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.pause();

  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Username" }).press("Tab");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  await page.getByRole("link", { name: "Admin" }).click();

  await page.locator("span").filter({ hasText: "Alex Tester8246" }).click();
  await page.getByRole("menuitem", { name: "Logout" }).click();
});
