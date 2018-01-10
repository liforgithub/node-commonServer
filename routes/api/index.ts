import koaRouter from 'koa-router';
const router = koaRouter();

import user_router from './user_router';

router.use('/users', user_router.routes(), user_router.allowedMethods());

export default router;
