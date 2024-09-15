export type BaseEvent<T> = {
  name: T;
  handler: (...args: Array<unknown>) => Promise<unknown>;
}