import { Entity, } from '@client/shared/domain/types/entity.type';

export interface CameraService {
  renderCamera(time: number): void;
  isActiveCamera(name: string): boolean;
  createCamera(name: string, position: Vector3): void;
  startInterpolate(name: string, position: Vector3, to: Vector3, rotation: Vector3, fov: number, duration: number, unk: number): void;
  setCameraActive(name: string, toggle: boolean, time?: number): void;
  attachCameraToEntity(name: string, entity: Entity): void;
  setCameraEntity(name: string, entity: Entity): void;
  setCameraLookAt(name: string, position: Vector3): void;
  setCameraLookAtBone(name: string, entity: Entity, bone: number): void;
  attachCameraToPedBone(name: string, ped: PlayerMp, bone: number): void;
  setCameraPosition(name: string, position: Vector3): void;
  getCameraPosition(name: string): Vector3 | undefined;
  destroyCamera(name: string): void;
}