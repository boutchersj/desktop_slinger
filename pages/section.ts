import { Locator } from '@playwright/test';
import { LocatorStrategy } from '../types';
const { id, xpath, altText, text } = LocatorStrategy;

export default class BaseSection {
  readonly root: Locator;
  constructor(root: Locator) {
    this.root = root
  }

  async element(strategy: string, selector: string): Promise<Locator> {
    switch(strategy) {
      case id:
        return this.root.getByTestId(selector)
      case xpath:
        return this.root.locator(selector)
      case altText:
        return this.root.getByAltText(selector)
      case text:
        return this.root.getByText(selector)
      default:
        throw Error('Not a valid locator strategy')
    }
  }

  async elements(strategy: string, selector: string): Promise<Locator[]> {
    switch(strategy) {
      case id:
        return this.root.getByTestId(selector).all()
      case xpath:
        return this.root.locator(selector).all()
      case altText:
        return this.root.getByAltText(selector).all()
      case text:
        return this.root.getByText(selector).all()
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