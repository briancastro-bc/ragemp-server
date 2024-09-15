import { inject, injectable, } from 'inversify';

import { BrowserService, } from '@client/shared/domain/services/browser.service';

@injectable()
export class BrowserImplementationService implements BrowserService {
  private readonly _instance: BrowserMp;

  private _currentRoute?: string;

  constructor(
    @inject('cef_url') private readonly url: string,
  ) {
    this._instance = mp.browsers.new(this.url);
  }

  openRoute(route: string): void {
    if (!this._instance || !mp.browsers.exists(this._instance)) return;

    const path = `location.hash = "#${route}"`;
    this._instance.execute(path);
    this._currentRoute = route;
    
    mp.gui.cursor.show(true, true);
  }

  closeRoute(route: string): void {}

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