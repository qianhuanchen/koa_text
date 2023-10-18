# koa_text
Koa framework learning
# 初始化koa
### 执行生成package.json
```
npm init -y
```
### 安装koa
```
npm i koa
```
### 安装body扩展和router
```
npm i koa-body koa-router
```
### 安装cors 跨域 @koa/cors
```
npm i @koa/cors
```
### 使用这些功能
```javascript
//引用
const Koa = require('koa')
const Router = require('koa-router')
const {koaBody} = require('koa-body')
//实例化koa
const app = new Koa();
const router = new Router();
app.use(koaBody())


app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
```
### 路由压缩 koa-combine-routers
```
npm i koa-combine-routers
```
Usage
```javascript
//index.js
const Koa = require('koa')
const router = require('./routes')

const app = new Koa()

app.use(router())
```
```javascript
//routes.js/
const Router = require('koa-router')
const combineRouters = require('koa-combine-routers')

const dogRouter = new Router()
const catRouter = new Router()

dogRouter.get('/dogs', async ctx => {
    ctx.body = 'ok'
})

catRouter.get('/cats', async ctx => {
    ctx.body = 'ok'
})

const router = combineRouters(
    dogRouter,
    catRouter
)

module.exports = router
```
### 更加安全的头 koa-helmet
```
npm i koa-helmet
```
Usage
```javascript
const helmet =require('koa-helmet');

app.use(helmet());
```
### 静态资源 koa-static
```
npm i koa-static
```
Usage
```javascript
//使用原生的方法
const path=require('path')

const statics=require('koa-static');

app.use(statics(path.join(__dirname,'../public')))
//现在可以在直接访问静态资源了
```
