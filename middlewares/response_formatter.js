"use strict";
/**
 * 在app.use(router)之前调用
 */
// var response_formatter = async (ctx, next) => {
//     //先去执行路由
//     await next();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//     //如果有返回数据，将返回数据添加到data中
//     if (ctx.body) {
//         ctx.body = {
//             code: 0,
//             message: 'success',
//             data: ctx.body
//         }
//     } else {
//         ctx.body = {
//             code: 0,
//             message: 'success'
//         }
//     }
// }
var ApiError = require('../app/error/ApiError');
/**
 * 在app.use(router)之前调用
 */
var response_formatter = (ctx) => {
    //如果有返回数据，将返回数据添加到data中
    if (ctx.body) {
        ctx.body = {
            code: 200,
            result: 'ok',
            message: 'success',
            data: ctx.body
        };
    }
    else {
        ctx.body = {
            code: 200,
            result: 'ok',
            message: 'success'
        };
    }
};
var url_filter = (pattern) => {
    return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
        var reg = new RegExp(pattern);
        try {
            //先去执行路由
            yield next();
        }
        catch (error) {
            //如果异常类型是API异常并且通过正则验证的url，将错误信息添加到响应体中返回。
            if (error instanceof ApiError && reg.test(ctx.originalUrl)) {
                ctx.status = 200;
                ctx.body = {
                    code: error.code,
                    message: error.message
                };
            }
            //继续抛，让外层中间件处理日志
            throw error;
        }
        //通过正则的url进行格式化处理
        if (reg.test(ctx.originalUrl)) {
            response_formatter(ctx);
        }
    });
};
// module.exports = response_formatter;
exports.default = url_filter;
//# sourceMappingURL=response_formatter.js.map