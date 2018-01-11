import config from '../../config/index';
import * as mysql from 'mysql';

export default class baseDao {

    static getSqlCon() {
        return mysql.createPool(config.mysqlConfig);
    }
}