import { injectable, } from 'inversify';

// import type { 
//   BrowserService, 
// } from '../../shared/domain/services/browser.service';

import { BrowserDomReady, } from './ports/browser-dom-ready.port';

@injectable()
export class BrowserDomReadyUseCase implements BrowserDomReady {
  createLoginScene(): void {
    // if (!this.browserService.instance)
    mp.console.logInfo('IN CREATE LOGIN SCENE');
    mp.console.logError('NO INSTANCE');
  }
}