// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://th.pycon.org/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/PyCon Thailand 2023/);
});

test("should buy ticket navigates to eventpop", async ({ page }) => {
  await page.goto("https://th.pycon.org/");

  await page.getByRole("button", { name: "Buy Ticket" }).click();
  await expect(page.url()).toBe("https://www.eventpop.me/e/15840");
  await expect(page.getByRole("link", { name: "Get Tickets" })).toBeVisible();
});

test("should have Pee and Bumbim", async ({ page }) => {
  await page.goto("https://th.pycon.org/");

  await expect(page.getByText("Pee", { exact: true })).toBeVisible();
  await expect(page.getByText("Bumbim, Siriwimon")).toBeVisible();
});

test("should have snake and elephant", async ({ page }) => {
  await page.goto("https://th.pycon.org/");

  const snakeIcon = page.getByText("🐍");
  await expect(snakeIcon).toBeVisible();

  await page.locator('//*[@id="root"]/div/div/div[2]/footer/div[3]').hover();
  await expect(page.getByText("🐘")).toBeVisible();
});
