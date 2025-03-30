import { DateTime } from "luxon"

export default function (
    opts?: {
        variant?: "info" | "error"
        requestId?: string
    },
    ...values: unknown[]
) {
    const variant = opts?.variant ?? "info"
    const requestId = opts?.requestId ?? "system"
    const output = `[${DateTime.now().toFormat("yyyy-LL-dd HH:mm:ss.SSS")}]> ${values.map((v) => v)} (${requestId})`
    if (variant === "info") {
        console.info(output)
    } else {
        console.error(output)
    }
}
