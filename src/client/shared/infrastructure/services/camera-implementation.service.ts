import { injectable, } from 'inversify';

import { Entity, } from '@client/shared/domain/types/entity.type';
import { CameraService, } from '@client/shared/domain/services/camera.service';
import { Camera, } from '@client/shared/domain/value-objects/camera.value-object';

@injectable()
export class CameraImplementationService implements CameraService {
  private readonly cameras: Array<Camera>;

  constructor() {
    this.cameras = new Array();
  }

  renderCamera(time: number): void {
    throw new Error('Method not implemented.');
  }

  isActiveCamera(name: string): boolean {
    throw new Error('Method not implemented.');
  }

  createCamera(name: string, position: Vector3): void {
    const current = this.cameras.find(c => c.name === name);
    if (!current) {
      const newCamera = new Camera(
        name,
        mp.cameras.new(name, position, new mp.Vector3(0, 0, 0), 50)
      );

      this.cameras.push(newCamera);
      return;
    }

    if (mp.cameras.exists(current.camera))
      current.camera.destroy();

    current.camera = mp.cameras.new(name, position, new mp.Vector3(0, 0, 0), 50);
    current.name = name;
  }

  setCameraActive(name: string, toggle: boolean, time: number = 0): void {
    const current = this.cameras.find(c => c.name === name);
    if (current && mp.cameras.exists(current.camera)) {
      current.camera.setActive(toggle);
      mp.game.cam.renderScriptCams(true, true, time, true, false, 0);
    }
  }

  startInterpolate(name: string, position: Vector3, to: Vector3, rotation: Vector3, fov: number, duration: number, unk: number): void {
    const current = this.cameras.find(c => c.name === name);
    if (current && mp.cameras.exists(current.camera)) {
      const currentFov = current.camera.getFov();
      current.camera.setParams(position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, currentFov, duration, unk, 1, 2);
      current.camera.setParams(to.x, to.y, to.z, rotation.x, rotation.y, rotation.z, fov, duration, unk, 1, 2);
    }
  }

  attachCameraToEntity(name: string, entity: Entity): void {
    throw new Error('Method not implemented.');
  }

  setCameraEntity(name: string, entity: Entity): void {
    throw new Error('Method not implemented.');
  }

  setCameraLookAt(name: string, position: Vector3): void {
    const current = this.cameras.find(c => c.name === name);
    if (current && mp.cameras.exists(current.camera)) {
      current.camera.pointAtCoord(position.x, position.y, position.z);
    }
  }

  setCameraLookAtBone(name: string, entity: Entity, bone: number): void {
    throw new Error('Method not implemented.');
  }
  
  attachCameraToPedBone(name: string, ped: PlayerMp, bone: number): void {
    throw new Error('Method not implemented.');
  }

  setCameraPosition(name: string, position: Vector3): void {
    throw new Error('Method not implemented.');
  }

  getCameraPosition(name: string): Vector3 | undefined {
    throw new Error('Method not implemented.');
  }

  destroyCamera(name: string): void {
    throw new Error('Method not implemented.');
  }
}