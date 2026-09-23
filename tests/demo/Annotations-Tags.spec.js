import { test, expect } from "@playwright/test";

test.skip("skip-test", async ({}) => {});

test("not yet ready", async ({}) => {
  test.fail();
});

test.fixme("fixme-test", async ({}) => {});

// test("slow test", async ({}) => {
//   test.slow();
// });

//run only this test
// test.only("only-test", async ({}) => {});

// TAGS
test("Test login page @smoke", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);
});
