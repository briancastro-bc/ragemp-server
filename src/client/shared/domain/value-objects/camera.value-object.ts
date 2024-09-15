export class Camera {
  name: string;
  camera: CameraMp;

  constructor(name: string, camera: CameraMp) {
    Object.assign(this, { name, camera });
  }
}