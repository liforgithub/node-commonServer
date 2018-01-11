import * as koaRouter from 'koa-router';
const router = koaRouter();

import user_router from './user_router';

router.use('/books', user_router.routes(), user_router.allowedMethods());

export default router;
