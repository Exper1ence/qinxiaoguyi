/**
 * Created by Exper1ence on 2017/1/2.
 */
global.ENV = require('./ENV');
const router = require('./router');
//asd
require('./app')(router);
router.start(ENV.debug ? 3000 : 80);