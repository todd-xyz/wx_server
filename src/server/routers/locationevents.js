const base_urel ='/wx/v1/locationevents';

const Router = require('koa-router');


const router = new Router();

router.get(base_urel,async(ctxt,next)=>{
    ctxt.body = {
        status: 'success',
        message: 'hello, world!'

    };

});

module.exports = router;


