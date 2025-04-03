import { Result } from "common/@types"
import APIInteractor from "@utils/APIInteractor"

const get = APIInteractor._get

APIInteractor.config({
    headers: {
        "Content-type": "application/json",
    },
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`,
})

export const API = {
    healthCheck: () => get<Result<boolean>>("/health-check"),
} as const
