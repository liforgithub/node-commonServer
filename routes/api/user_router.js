"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koaRouter = require("koa-router");
const bookcontroller_1 = require("../../app/controllers/bookcontroller");
const router = koaRouter();
router.get('/getBookList', bookcontroller_1.default.queryBookList);
exports.default = router;
//# sourceMappingURL=user_router.js.map