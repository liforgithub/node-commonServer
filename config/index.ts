import development_env from './development';
import test_env from './test';
import mysql from './mysql';

//根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
let index = {
    development: development_env,
    test: test_env,
    mysqlConfig: mysql
}[process.env.NODE_ENV || 'development'];

export default index;