import { Next, ParameterizedContext } from "koa"
import log from "@utils/log"

export default async function (ctx: ParameterizedContext, next: Next) {
    const requestId = ctx.request.get("x-request-id")

    log(
        {
            variant: "info",
            requestId,
        },
        `[${ctx.request.method}] ${ctx.request.url}`
    )

    await next()
}
