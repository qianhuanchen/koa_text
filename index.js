const Koa=require('koa')
// const {koaBody}=require('koa-body')
// const Router=require('koa-router')
//实例化koa
const app=new Koa();
app.use((ctx)=>{
    ctx.body='123123123';
})
app.listen(3000);