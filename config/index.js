"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const development_1 = require("./development");
const test_1 = require("./test");
const mysql_1 = require("./mysql");
//根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
let index = {
    development: development_1.default,
    test: test_1.default,
    mysqlConfig: mysql_1.default
}[process.env.NODE_ENV || 'development'];
exports.default = index;
//# sourceMappingURL=index.js.map