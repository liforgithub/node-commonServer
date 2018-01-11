import tbBook from '../dao/tbBook';

export default class bookController {

    static queryBookList = async (ctx, next) => {
        let count = await tbBook.count();
        count = count[0]['count(1)'];
        let list = await tbBook.query() || [];
        ctx.body = {
            dataList: list,
            totalCount: count
        };
    }
}