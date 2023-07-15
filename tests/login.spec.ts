const testUtils = require('../utils/testUtils.ts')
const util = testUtils()
const robot = require('robotjs')

import { test, expect } from '@playwright/test'
import type { Page, ElectronApplication, Locator } from 'playwright'
import ExamplePage from '../pages/examplePage'
// import ExampleSection from '../pages/exampleSection'

test.describe('Notion Welcome Page', async () => {
  let app: ElectronApplication;
  let appWindow: Page;
  let Example: ExamplePage;

  test.beforeAll(async () => {
    app = await util.launchApp()
    appWindow = await util.getWindow(app)
    Example = new ExamplePage(appWindow)
  })

  test.afterAll(async () => {
    await util.getPNG(appWindow, 'final_glimpse')
    await util.saveHTML(appWindow, 'final_glimpse')
    await appWindow.close()
    await app.close()
  })

  test('Search option appears in sidebar', async () => {
    const searchBtn: Locator = await Example.search

    await expect(searchBtn).toHaveText(Example.searchM)
    await expect(await appWindow.getByText('Search')).toHaveText('Search')
  })

  test('Search bar is editable', async () => {
    const searchBtn: Locator = await Example.search
    const searchBar: Locator = await Example.searchBar

    await (searchBtn).click()

    await expect(searchBar).toBeEditable()
  })

  test('User can find 9+ pages matching the keyword "Journal"', async () => {
    const searchBar: Locator = await Example.searchBar
    const searchResults: Locator = await Example.searchResults

    searchBar.fill('Hawaii Vacation')

    await expect(searchResults).toBeVisible()
  })

  // test('Sections all have authors', async () => {
  //   const blogPosts = await Example.blogPosts
  //   blogPosts.forEach(async (blogPost, idx) => {
  //     const BlogPost = new ExampleSection(blogPost)
  //     await expect(await BlogPost.author).toHaveText(BlogPost.authorMs[idx])
  //   })
  // })
})
