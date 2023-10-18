//引用
const Koa = require('koa')
const Router = require('koa-router')
const {koaBody} = require('koa-body')
const cors=require('@koa/cors')
//实例化koa
const app = new Koa();
const router = new Router();


router.prefix('/api')
router.post('/add', (ctx) => {
    ctx.body = ctx.request.body;
})

app.use(cors())
app.use(koaBody())


app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);