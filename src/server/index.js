const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const checkRouter = require('./routers/check');
const locationEvents = require('./routers/locationevents');


const app = new Koa();
app.proxy=true;

const PORT = process.env.PORT || 1337;

app.use(bodyParser());
app.use(checkRouter.routes());
app.use(locationEvents.routes);

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;

