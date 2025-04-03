import { Result } from "../@types"

/**
 * Wraps a given function to ensure it matches the expected Result
 * return type. Useful for interacting with external APIs.
 * @param fn A function to wrap
 * @returns A new function that will return a Result type
 */
export default function <I extends unknown[], O>(
    fn: (...args: I) => O | Promise<O>
): (...args: I) => Promise<Result<Awaited<O>, unknown>> {
    const foo = async (...args: I): Promise<Result<Awaited<O>, unknown>> => {
        try {
            return {
                error: false,
                data: await fn(...args),
            }
        } catch (error) {
            return {
                error: true,
                result: error,
            }
        }
    }
    return foo
}
