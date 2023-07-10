import BaseSection from './generics/section';
import { Locator } from '@playwright/test'

export default class ExampleSection extends BaseSection {
    constructor(root: Locator) {
        super(root)
    }

    // Messages
    authorM = this.message('First Last')

    // Elements
    author = this.element('id', 'author_name')
}