"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koaRouter = require("koa-router");
const router = koaRouter();
const user_router_1 = require("./user_router");
router.use('/books', user_router_1.default.routes(), user_router_1.default.allowedMethods());
exports.default = router;
//# sourceMappingURL=index.js.map