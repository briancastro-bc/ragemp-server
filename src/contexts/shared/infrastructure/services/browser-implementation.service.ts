import { inject, } from '@ioc';

import { BrowserService, } from '@shared/domain/services/browser.service';

export class BrowserImplementationService implements BrowserService {
  private readonly _instance: BrowserMp;

  private _currentRoute?: string;

  constructor(
    @inject('cef_url') private readonly url: string,
  ) {
    this._instance = clientmp.browsers.new(this.url);
  }

  openRoute(): void {}

  closeRoute(): void {}

  toggleActive(): boolean {
    if (!this._instance) return false;
    return this._instance.active = !this._instance.active;
  }

  get instance(): BrowserMp {
    return this._instance;
  }

  get currentRoute(): string | undefined {
    return this._currentRoute;
  }
}