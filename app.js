const Koa = require('koa');
const router = require('koa-router')();
const sha1 = require('sha1')

const app = new Koa();
app.proxy=true;

app.use(async (ctx,next) => {
    console.log(`Process $(ctx.request.method) $(ctx.request.url)...`)
    await next();
});

router.get('/wx' , async(ctx,next)=>{
    
    const { signature, timestamp, nonce, echostr } = ctx.query
    const token = "xuetao72" // 微信后台定义的token字符串
    const params = [ token, timestamp, nonce ].sort()
    // 连接
    const str = sha1(params.join(""))
    if(str == signature)  // 本地加密的数据与传过来的加密字符串相等
      return ctx.body = echostr // 直接返回随机字符串
    else return ctx.body = "fail"  //不匹配则认证失败

})
app.use(router.routes());

app.listen(3000);
console.log('App start at port 300...');


