type Err<T = string> = {
    error: true
    result: T
}

type Ok<T> = {
    error: false
    data: T
}

export type Result<O, E = string> = Ok<O> | Err<E>
