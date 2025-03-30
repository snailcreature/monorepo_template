import { Next, ParameterizedContext } from "koa"
import log from "@utils/log"

export default async function (ctx: ParameterizedContext, next: Next) {
    try {
        await next()
    } catch (error) {
        log(
            {
                variant: "error",
                requestId: ctx.get("x-request-id"),
            },
            error
        )
    }
}
