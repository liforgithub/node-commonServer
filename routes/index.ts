import koaRouter from 'koa-router';

import api from './api/index';

const router = koaRouter();

router.use('/api', api.router(), api.allowedMethods());

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index', {
  });
})
export default router;
