import * as koaRouter from 'koa-router';
import bookController from "../../app/controllers/bookcontroller";
const router = koaRouter();

router.get('/getBookList', bookController.queryBookList);

export default router;
