"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = require("koa-router");
const router = koa_router_1.default();
const user_router_1 = require("./user_router");
router.use('/users', user_router_1.default.routes(), user_router_1.default.allowedMethods());
exports.default = router;
module.exports = router;
//# sourceMappingURL=index.js.map