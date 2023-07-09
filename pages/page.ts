import { Page, Locator } from '@playwright/test';
import { LocatorStrategy } from '../types';
const { id, xpath, altText, text } = LocatorStrategy;

export default class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page
  }

  async element(strategy: string, selector: string): Promise<Locator> {
    switch(strategy) {
      case id:
        return this.page.getByTestId(selector)
      case xpath:
        return this.page.locator(selector)
      case altText:
        return this.page.getByAltText(selector)
      case text:
        return this.page.getByText(selector)
      default:
        throw Error('Not a valid locator strategy')
    }
  }

  async elements(strategy: string, selector: string): Promise<Locator[]> {
    switch(strategy) {
      case id:
        return this.page.getByTestId(selector).all()
      case xpath:
        return this.page.locator(selector).all()
      case altText:
        return this.page.getByAltText(selector).all()
      case text:
        return this.page.getByText(selector).all()
      default:
        throw Error('Not a valid locator strategy')
    }
  }

  message(message: string): string {
    return message
  }

  messages(messages: string[]): string[] {
    return messages
  }
}