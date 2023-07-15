import BasePage from './generics/page'
import { Page } from '@playwright/test'

export default class ExamplePage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    // Messages
    searchM = this.message('Search')

    // Elements
    search = this.element('text', 'Search')
    searchBar = this.element('placeholder', "Search Steven Boutcher's Notion")
    searchResults = this.element('text', '9+ results')

    // blogPosts = this.elements('id', 'container_element')
}