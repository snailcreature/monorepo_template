import { Next, ParameterizedContext } from "koa"
import uuid4 from "uuid4"

export default async function (ctx: ParameterizedContext, next: Next) {
    const requestId = ctx.request.get("x-request-id") || uuid4()
    ctx.request.headers["x-request-id"] = requestId
    ctx.request.headers["Access-Control-Expose-Headers"] = "x-request-id"
    await next()
}
