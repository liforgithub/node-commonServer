import * as Koa from 'koa';
import * as views from 'koa-views';
import * as convert from 'koa-convert';
import * as json from 'koa-json';
import * as koaBodyparser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as cors from 'koa-cors';

import webRouter from './routes';
//log工具
import logUtil from './utils/log_util';

import response_formatter from './middlewares/response_formatter';

const app = new Koa();
const bodyparser = koaBodyparser();

// middlewares
app.use(cors());
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(convert(require('koa-static')(__dirname + '/public')));

app.use(views(__dirname + '/views', {
    extension: 'jade'
}));

// logger
app.use(async (ctx, next) => {
    //响应开始时间
    const start = new Date();
    //响应间隔时间
    let ms: any = null;
    try {
        //开始进入到下一个中间件
        await next();

        ms = new Date() - start;
        //记录响应日志
        logUtil.logResponse(ctx, ms);

    } catch (error) {

        ms = new Date() - start;
        //记录异常日志
        logUtil.logError(ctx, error, ms);
    }
});

//添加格式化处理响应结果的中间件，在添加路由之前调用
//仅对/api开头的url进行格式化处理
app.use(response_formatter('^/api'));

app.use(webRouter.routes());
// response
app.on('error', (err, ctx) => {
    console.log(err);
    logger.error('server error', err, ctx);
});


module.exports = app;