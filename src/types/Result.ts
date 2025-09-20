export type Result<T, E = string> = 
  | { success: true; data: T }
  | { success: false; error: E }

export const Success = <T>(data: T): Result<T> => ({ success: true, data })
export const Failure = <E = string>(error: E): Result<never, E> => ({ success: false, error })