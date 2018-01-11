import baseDao from "./baseDao";

export default class tbBook extends baseDao {

    static query() {
        let sqlCon = this.getSqlCon();
        return new Promise((resolve, reject) => {
            sqlCon.getConnection((err, conn) => {
                let sql = "select * from tb_book where 1=1";
                conn.query(sql, (err, result) => {
                    conn.release();
                    resolve(result);
                })
            });
        })
    }

    static count() {
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