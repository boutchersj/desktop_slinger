const testUtils = require('../../../utils/testUtils')
const util = testUtils()

import { test, expect } from '@playwright/test'
import type { Page, ElectronApplication, Locator } from 'playwright'
import ExamplePage from '../pages/examplePage'
import ExampleSection from '../pages/exampleSection'

test.describe('Login', async () => {
  let app: ElectronApplication;
  let appWindow: Page;
  let Example: ExamplePage;

  test.beforeAll(async () => {
    app = await util.newDST()
    appWindow = await util.getappWindow(app)
    Example = new ExamplePage(appWindow)
  })

  test.afterAll(async () => {
    await appWindow.close()
    await app.close()
  })

  test.afterAll(async () => {
    util.getPNG(appWindow, 'final_glimpse')
    util.saveHTML(appWindow, 'final_glimpse')
  })

  test('Login screen matches expected design', async () => {
    const title: Locator = await Example.title

    await expect(title).toHaveText(Example.titleM)
  })

  test('Sections all have authors', async () => {
    const blogPosts = await Example.blogPosts
    blogPosts.forEach(async (blogPost, idx) => {
      const BlogPost = new ExampleSection(blogPost)
      await expect(BlogPost.author).toHaveText(BlogPost.authorMs[idx])
    })
  })
})
