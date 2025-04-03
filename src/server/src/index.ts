import config from "./config"
import api from "./api"
import log from "./utils/log"

api.listen(config.port)
log(
    {
        variant: "info",
    },
    `server listening on port ${config.port}`
)
