export interface Auth {
  openLoginRoute(): void;
  createLoginScene(from: Vector3, to: Vector3, rot: number): void;
}