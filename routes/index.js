/*
 * @Author: Cyseria
 * @Date: 2018-05-20 15:26:29
 * @LastEditors: Cyseria
 * @LastEditTime: 2018-05-27 22:45:46
 * @Description: 主路由，用于渲染子路由
 */

const router = require('koa-router')();

const cherry = require('./cherry');

router.get('/', async function (ctx, next) {
  ctx.body = '🍒 congratulation, cherry server works';
})

router.use(cherry.routes(), cherry.allowedMethods());

module.exports = router;
