// @ts-check
const { test, expect } = require("@playwright/test");

test("should append with hello", async ({ page }) => {
  // Arrange
  await page.goto("http://localhost:4321/hello");

  await page.getByPlaceholder("Type something here").fill("World");
  // Action

  // Assert
  await expect(
    page.getByRole("heading", { name: "Hello World" })
  ).toBeVisible();
});

test("should have the same snapshot", async ({ page }) => {
  // Arrange
  await page.goto("http://localhost:4321/hello");

  await page.getByPlaceholder("Type something here").fill("World");
  // Action

  // Assert
  await expect(page).toHaveScreenshot();
});
