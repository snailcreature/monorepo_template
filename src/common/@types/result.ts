type Err<T = string> = {
    ok: false
    error: T
}

type Ok<T> = {
    ok: true
    data: T
}

export type Result<O, E = string> = Ok<O> | Err<E>
