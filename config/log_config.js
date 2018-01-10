"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * log4js 配置文件
 *
 * 日志等级由低到高
 * ALL TRACE DEBUG INFO WARN ERROR FATAL OFF.
 *
 * 关于log4js的appenders的配置说明
 * https://github.com/nomiddlename/log4js-node/wiki/Appenders
 */
let path = require('path');
//日志根目录
const baseLogPath = path.resolve(__dirname, '../logs');
//错误日志目录
const errorPath = "/error";
//错误日志文件名
const errorFileName = "error";
//错误日志输出完整路径
const errorLogPath = baseLogPath + errorPath + "/" + errorFileName;
// var errorLogPath = path.resolve(__dirname, "../logs/error/error");
//响应日志目录
const responsePath = "/response";
//响应日志文件名
const responseFileName = "response";
//响应日志输出完整路径
const responseLogPath = baseLogPath + responsePath + "/" + responseFileName;
// var responseLogPath = path.resolve(__dirname, "../logs/response/response");
let logConfig = {
    "appenders": [
        //错误日志
        {
            "category": "errorLogger",
            "type": "dateFile",
            "filename": errorLogPath,
            "alwaysIncludePattern": true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": errorPath //自定义属性，错误日志的根目录
        },
        //响应日志
        {
            "category": "resLogger",
            "type": "dateFile",
            "filename": responseLogPath,
            "alwaysIncludePattern": true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": responsePath
        }
    ],
    "levels": //设置logger名称对应的的日志等级
    {
        "errorLogger": "ERROR",
        "resLogger": "ALL"
    },
    "baseLogPath": baseLogPath //logs根目录
};
exports.default = logConfig;
//# sourceMappingURL=log_config.js.map