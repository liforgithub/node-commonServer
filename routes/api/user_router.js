"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = require("koa-router");
const router = koa_router_1.default();
const user_controller_1 = require("../../app/controllers/user_controller");
router.get('/getUser', user_controller_1.default.getUser);
router.post('/registerUser', user_controller_1.default.registerUser);
exports.default = router;
//# sourceMappingURL=user_router.js.map