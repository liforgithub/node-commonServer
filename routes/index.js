"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = require("koa-router");
const index_1 = require("./api/index");
const router = koa_router_1.default();
router.use('/api', index_1.default.router(), index_1.default.allowedMethods());
router.get('/', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        ctx.state = {
            title: 'koa2 title'
        };
        yield ctx.render('index', {});
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map