"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cxMysql = void 0;
var mysql_1 = require("mysql");
exports.cxMysql = mysql_1.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db-node-mysql',
});
