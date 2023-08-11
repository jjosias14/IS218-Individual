const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('file:///path/to/your/index.html'); // Replace with your actual file path

  // Assert that the banner text is visible
  await page.waitForSelector('.banner h1');
  const bannerText = await page.textContent('.banner h1');
  expect(bannerText).toBe("Welcome to Joshua's Portfolio");

  // Assert that the navigation links are present
  await page.waitForSelector('nav ul');
  const navLinksCount = await page.evaluate(() => document.querySelectorAll('nav ul li').length);
  expect(navLinksCount).toBe(5); // Assuming 5 navigation links

  // More assertions can be added here to test other elements

  await browser.close();
})();
