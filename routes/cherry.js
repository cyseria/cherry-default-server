/**
 * @file cherry 的接口信息
 * @author Cyseria <xcyseria@gmail.com> 
 * @created time: 2018-06-10 09:39:36 
 * @last modified by: Cyseria
 * @last modified time: 2018-06-10 20:10:05
 */

// TODO: 增加错误处理
const fileOperate = require('../utils/fileOperate');

const router = require('koa-router')({
    prefix: '/cherry'
});

// get lists,包含所有信息,不传参数的时候是获取所有,有参数的时候就获取一部分
router.get('/', async (ctx, next) => {
    const config = await fileOperate.read();
    if (Object.keys(ctx.query).length === 0) { // 没有传参数过来,返回全列表
        ctx.body = config || {};
    } else {
        const {name} = ctx.query;
        if (!!name) {
            ctx.body = config[name];
        }
    }
})

// 获取列表名称, 不传参数的时候是获取所有,有参数的时候就获取一部分
router.get('/simple-list', async (ctx, next) => {
    const config = await fileOperate.read();
    ctx.body = Object.keys(config);
})

// new item & 修改
router.post('/publish', async (ctx, next) => {
    const config = await fileOperate.read();
    const reqBody = ctx.request.body;
    const obj = {};
    obj[reqBody.name] = reqBody;
    const newConfig = Object.assign(config, obj);
    await fileOperate.write(newConfig)
    ctx.body = {};
})

// 删除某个(暂不暴露)
router.delete('/item', async (ctx, next) => {
    const config = await fileOperate.read();
    const reqBody = ctx.request.body;
    if (config.hasOwnProperty(reqBody.name)) {
        delete config[reqBody.name];
    }
    await fileOperate.write(config)
    ctx.body = {};
})

module.exports = router;