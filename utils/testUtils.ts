import { expect } from '@playwright/test'
import type { Page, ElectronApplication } from 'playwright'
const { _electron: electron } = require('playwright')
const os = require('os')
const fs = require('fs')
const { appPathForOS } = require('./osUtils')
import { viewportSize } from '../configHelper'

exports.poll = async (assertion: any) => {
    await expect(async () => {
        assertion
    }).toPass()
}

exports.logHTML = async (page: Page) => {
    await page.content().then(content => { console.log(content) })
}

exports.saveHTML = async (page: Page, fileName: string) => {
    const pageSource = await page.content()
    await fs.promises.writeFile(`screenshots/${fileName}.html`, pageSource)
}

exports.getPNG = async (page: Page, fileName: string) => {
    await page.screenshot({ path: `screenshots/${fileName}.png`, fullPage: true });
}

exports.launchApp = async (offline: Boolean=false) => {
    const app: ElectronApplication = await electron.launch({
        executablePath: appPathForOS.notion[os.platform()],
        offline: offline
    })
    return app
}

exports.getWindow = async (app: ElectronApplication) => {
    const appWindow: Page = await app.firstWindow()
    await appWindow.setViewportSize(viewportSize)
    return appWindow
}

module.exports = function appUtils() {
    return { ...exports }
}