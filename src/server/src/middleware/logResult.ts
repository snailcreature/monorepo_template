import log from "@utils/log"
import { Next, ParameterizedContext } from "koa"

export default async function (ctx: ParameterizedContext, next: Next) {
    log(
        {
            variant: "info",
            requestId: ctx.request.get("x-request-id"),
        },
        ctx.status
    )

    await next()
}
