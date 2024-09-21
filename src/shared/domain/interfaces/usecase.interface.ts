export interface UseCase {
  execute(...args: Array<unknown>): Promise<unknown>;
  execute<Input, Output>(input: Input): Promise<Output>;
}