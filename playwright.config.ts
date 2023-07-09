// playwright.config.ts
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'tests',
  outputDir: 'test-results',
  snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}{ext}',
  use: {
    trace: 'retain-on-failure',
    video: 'on'
  },
  retries: 0,
  workers: 1,
  expect: {
    timeout: 30 * 1000,
  },
  timeout: 30 * 1000,
  reporter: [
    ['list'],
    ['junit', { outputFile: `test-results/test-results-${new Date().toISOString().replace(/:/g,'_')}.xml` }]
  ]
};
export default config;