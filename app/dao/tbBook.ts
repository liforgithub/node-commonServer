import baseDao from "./baseDao";

export default class tbBook extends baseDao {

    static query(ctx) {
        let sqlCon = this.getSqlCon();
        return new Promise((resolve, reject) => {
            sqlCon.getConnection((err, conn) => {
                let sql = "select * from tb_book where 1=1";

                sql += " LIMIT " + ctx.query.pageNum * ctx.query.pageSize + "," + ctx.query.pageSize;
                conn.query(sql, (err, result) => {
                    conn.release();
                    resolve(result);
                })
            });
        })
    }

    static count(ctx) {
        let sqlCon = this.getSqlCon();
        return new Promise((resolve, reject) => {
            sqlCon.getConnection((err, conn) => {
                let sql = "select count(1) from tb_book where 1=1";
                conn.query(sql, (err, result) => {
                    conn.release();
                    resolve(result);
                })
            });
        })
    }
}