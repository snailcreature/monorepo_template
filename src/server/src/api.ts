import "./bootstrap"
import bodyParser from "@koa/bodyparser"
import cors from "@koa/cors"
import errorHandler from "@middleware/errorHandler"
import Koa from "koa"
import koaHelmet from "koa-helmet"
import logRequest from "@middleware/logRequest"
import logResult from "@middleware/logResult"
import routes from "./routes"
import setRequestId from "@middleware/setRequestId"

const api = new Koa()

api.use(setRequestId)
api.use(logRequest)

api.use(cors())
api.use(bodyParser())
api.use(koaHelmet())

api.use(errorHandler)

api.use(routes.routes())

api.use(logResult)

export default api
