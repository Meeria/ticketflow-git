import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  // Ajout du reporter HTML
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    baseURL: process.env.E2E_BASE_URL || "http://localhost:5173"
  }
});