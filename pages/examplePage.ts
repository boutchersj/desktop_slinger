import BasePage from './page';
import { Page } from '@playwright/test'

export default class ExamplePage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    // Messages
    titleM = this.message('Welcome to the App')

    // Elements
    title = this.element('id', 'page_title')
}