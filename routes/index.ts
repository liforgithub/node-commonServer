import * as koaRouter from 'koa-router';

import api from './api';

const router = koaRouter();

router.use('/api', api.routes(), api.allowedMethods());

router.get('/', async function (ctx, next) {
    ctx.state = {
        title: 'koa2 title'
    };

    await ctx.render('index', {});
});

export default router;
