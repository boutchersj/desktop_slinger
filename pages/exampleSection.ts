import BaseSection from './generics/section';
import { Locator } from '@playwright/test'

export default class ExampleSection extends BaseSection {
    constructor(root: Locator) {
        super(root)
    }

    // Messages
    authorMs = this.messages([
        'Person One',
        'Person Two',
        'Person Three'
    ])

    // Elements
    author = this.element('id', 'author_name')
}