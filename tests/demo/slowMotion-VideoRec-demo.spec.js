import { test } from "@playwright/test";
const { chromium } = require("playwright");

test("slowMotion-VideoRecording-demo", async () => {
  //launch browser in slow motion and record video
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });

  // create context for browser and enable video recording
  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/",
      size: { width: 800, height: 600 },
    },
  });

  const page = await context.newPage();

  await page.goto("https://demo.applitools.com/");
  await page.pause();

  await page.locator("#username").fill("rahul");
  await page.locator("#password").fill("admin");

  await page.waitForSelector("#log-in", { timeout: 5000 });
  await page.locator("[id='log-in']").click();

  await context.close();
});
