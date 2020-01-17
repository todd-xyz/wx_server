const Router = require('koa-router');
const sha1 = require('sha1')

const router = new Router();

const base_dir = '/wx';
const myToken = "xuetao72" ;

router.get(base_dir,(ctx,next)=>{
    
    const { signature, timestamp, nonce, echostr } = ctx.query
    const token = myToken // 微信后台定义的token字符串
    const params = [token, timestamp, nonce].sort()
    // 连接
    const str = sha1(params.join(""))
    if (str == signature)  // 本地加密的数据与传过来的加密字符串相等
        return ctx.body = echostr // 直接返回随机字符串
    else return ctx.body = "fail"  //不匹配则认证失败

});

module.exports = router;
    
