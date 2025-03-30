let _defaultHeaders: RequestInit["headers"] | undefined = undefined
let _defaultBaseUrl: string = ""

export default class {
    static config(opts: {
        headers?: RequestInit["headers"]
        baseUrl?: string
    }) {
        _defaultHeaders = opts.headers
        _defaultBaseUrl = opts.baseUrl ?? ""
    }

    static getConfig() {
        return {
            defaultHeaders: _defaultHeaders,
            defaultBaseurl: _defaultBaseUrl,
        }
    }

    static async _get<O>(
        url: string,
        opts?: {
            headers?: RequestInit["headers"]
        }
    ): Promise<O> {
        const res = await fetch(_defaultBaseUrl + url, {
            method: "GET",
            headers: {
                ..._defaultHeaders,
                ...opts?.headers,
            },
        })

        return (await res.json()) as O
    }

    static async _post<I extends object, O>(
        url: string,
        body: I,
        opts?: {
            headers?: RequestInit["headers"]
        }
    ): Promise<O> {
        const res = await fetch(_defaultBaseUrl + url, {
            method: "POST",
            headers: {
                ..._defaultHeaders,
                ...opts?.headers,
            },
            body: JSON.stringify(body),
        })

        return (await res.json()) as O
    }

    static async _put<I extends object, O>(
        url: string,
        body: I,
        opts?: {
            headers?: RequestInit["headers"]
        }
    ): Promise<O> {
        const res = await fetch(_defaultBaseUrl + url, {
            method: "PUT",
            headers: {
                ..._defaultHeaders,
                ...opts?.headers,
            },
            body: JSON.stringify(body),
        })

        return (await res.json()) as O
    }

    static async _patch<I extends object, O>(
        url: string,
        body: Partial<I>,
        opts?: {
            headers?: RequestInit["headers"]
        }
    ): Promise<O> {
        const res = await fetch(_defaultBaseUrl + url, {
            method: "PATCH",
            headers: {
                ..._defaultHeaders,
                ...opts?.headers,
            },
            body: JSON.stringify(body),
        })

        return (await res.json()) as O
    }

    static async _delete<O>(
        url: string,
        opts?: {
            headers?: RequestInit["headers"]
        }
    ): Promise<O> {
        const res = await fetch(_defaultBaseUrl + url, {
            method: "DELETE",
            headers: {
                ..._defaultHeaders,
                ...opts?.headers,
            },
        })

        return (await res.json()) as O
    }
}
