import Router from "@koa/router"
import { Result } from "common/@types"
import { ParameterizedContext } from "koa"

const routes = new Router({
    prefix: "/api",
})

routes.get("/health-check", async (ctx: ParameterizedContext) => {
    ctx.status = 200
    ctx.body = {
        error: false,
        data: true,
    } as Result<boolean>
})

export default routes
