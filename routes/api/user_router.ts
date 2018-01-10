import koaRouter from 'koa-router';
const router = koaRouter();

import user_controller from '../../app/controllers/user_controller';

router.get('/getUser', user_controller.getUser);
router.post('/registerUser', user_controller.registerUser);

export default router;
