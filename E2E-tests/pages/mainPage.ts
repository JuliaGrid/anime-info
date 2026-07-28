import { Locator, Page } from '@playwright/test';
import Layout from './layout';

export default class MainPage extends Layout {
  public searchInput: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.searchInput = page.locator('input[type="text"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async searchAnime(text: string) {
    await this.searchInput.pressSequentially(text, { delay: 150 });
    await this.searchInput.press('Enter');
  }
}
