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
const Koa = require("koa");
const views = require("koa-views");
const convert = require("koa-convert");
const json = require("koa-json");
const koaBodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const routes_1 = require("./routes");
//log工具
const log_util_1 = require("./utils/log_util");
const response_formatter = require('./middlewares/response_formatter');
const app = new Koa();
const bodyparser = koaBodyparser();
// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(convert(require('koa-static')(__dirname + '/public')));
app.use(views(__dirname + '/views', {
    extension: 'jade'
}));
// logger
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    //响应开始时间
    const start = new Date();
    //响应间隔时间
    let ms = null;
    try {
        //开始进入到下一个中间件
        yield next();
        ms = new Date() - start;
        //记录响应日志
        log_util_1.default.logResponse(ctx, ms);
    }
    catch (error) {
        ms = new Date() - start;
        //记录异常日志
        log_util_1.default.logError(ctx, error, ms);
    }
}));
//添加格式化处理响应结果的中间件，在添加路由之前调用
//仅对/api开头的url进行格式化处理
app.use(response_formatter('^/api'));
app.use(routes_1.default.routes());
// response
app.on('error', (err, ctx) => {
    console.log(err);
    logger.error('server error', err, ctx);
});
module.exports = app;
//# sourceMappingURL=app.js.map