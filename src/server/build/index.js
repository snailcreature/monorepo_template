"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
const log_1 = __importDefault(require("./utils/log"));
api_1.default.listen(3000);
(0, log_1.default)({
    variant: "info",
}, `server listening on port ${3000}`);
