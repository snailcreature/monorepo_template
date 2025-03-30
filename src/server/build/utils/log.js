"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const luxon_1 = require("luxon");
function default_1(opts, ...values) {
    var _a, _b;
    const variant = (_a = opts === null || opts === void 0 ? void 0 : opts.variant) !== null && _a !== void 0 ? _a : "info";
    const requestId = (_b = opts === null || opts === void 0 ? void 0 : opts.requestId) !== null && _b !== void 0 ? _b : "system";
    const output = `[${luxon_1.DateTime.now().toFormat("yyyy-LL-dd HH:mm:ss.SSS")}]> ${values.map((v) => v)} (${requestId})`;
    if (variant === "info") {
        console.info(output);
    }
    else {
        console.error(output);
    }
}
