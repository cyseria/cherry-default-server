/**
 * @file 
 * @author Cyseria <xcyseria@gmail.com> 
 * @created time: 2018-06-10 01:02:29 
 * @last modified by: Cyseria
 * @last modified time: 2018-06-10 01:04:59
 */

const koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const api = require('./routes/index');

const app = new koa();

// 允许跨域
app.use(cors({
    origin: function (ctx) {
        return "*"; // 允许来自所有域名请求
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// 解析 request 请求，必须在 router 之前被注册到 app 对象上
app.use(bodyParser())

// 路由信息
app.use(api.routes());

app.listen(8008, () => {
    console.log('The server is running/')
})