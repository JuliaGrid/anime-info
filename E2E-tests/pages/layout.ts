import { Locator, Page } from '@playwright/test';

export default class Layout {
  public page: Page;
  public title: Locator;
  public footer: Locator;

  constructor(page: Page) {
    this.page = page;

    this.title = page.getByText('AnimeList');
    this.footer = page.getByText('2026');
  }
}
