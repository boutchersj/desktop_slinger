import { Page, Locator } from '@playwright/test';
import { LocatorStrategy } from '../../types';
const { id, xpath, altText, text } = LocatorStrategy;

export default class BaseGeneric {
  readonly base: Page | Locator;
  constructor(base: Page | Locator) {
    this.base = base
  }

  async element(strategy: string, selector: string): Promise<Locator> {
    switch(strategy) {
      case id:
        return this.base.getByTestId(selector)
      case xpath:
        return this.base.locator(selector)
      case altText:
        return this.base.getByAltText(selector)
      case text:
        return this.base.getByText(selector)
      default:
        throw Error('Not a valid locator strategy')
    }
  }

  async elements(strategy: string, selector: string): Promise<Locator[]> {
    switch(strategy) {
      case id:
        return this.base.getByTestId(selector).all()
      case xpath:
        return this.base.locator(selector).all()
      case altText:
        return this.base.getByAltText(selector).all()
      case text:
        return this.base.getByText(selector).all()
      default:
        throw Error('Not a valid locator strategy')
    }
  }

  message(message: string): string {
    return message
  }

  messages(messages: (string|string[])[]): (string|string[])[] {
    return messages
  }
}