const combineRoutes=require('koa-combine-routers');
const aRoutes=require('./aRouter.js')
const bRouter=require('./bRouter.js')

module.exports=combineRoutes(
    aRoutes,bRouter
)
