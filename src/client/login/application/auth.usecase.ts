import { inject, injectable, } from 'inversify';

import { CameraService, } from '@client/shared/domain/services/camera.service';

import { Auth, } from './ports/auth.port';
import { BrowserService } from '@client/shared/domain/services/browser.service';

@injectable()
export class AuthUsecase implements Auth {
  constructor(
    @inject('CameraService') private readonly cameraService: CameraService,
    @inject('BrowserService') private readonly browserService: BrowserService,
  ) {}

  openLoginRoute(): void {
    this.browserService.openRoute('login');
  }

  createLoginScene(from: Vector3, to: Vector3, rot: number): void {
    mp.players.local.position = new mp.Vector3(to.x, to.y, to.z - 3);
    this.cameraService.createCamera('login_camera', from);
    this.cameraService.setCameraActive('login_camera', true);
    this.cameraService.startInterpolate('login_camera', from, to, new mp.Vector3(0, 0, 0), 30, 20000, 0);
    this.cameraService.setCameraLookAt('login_camera', to);
    mp.game.invoke('0x428CA6DBD1094446', mp.players.local.handle, true);
  }
}