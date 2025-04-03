import "module-alias/register"
import { config } from "dotenv"

const envFile = process.env.ENV_FILE || ".env"

config({ path: envFile })

console.info(`Using environment file ${envFile}`)
