import api from "./api"
import log from "./utils/log"

api.listen(3000)
log(
    {
        variant: "info",
    },
    `server listening on port ${3000}`
)
