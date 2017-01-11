/**
 * Created by Exper1ence on 2017/1/2.
 */
ENV = {
    DEBUG: true,
};
const router = require('./router');
//asd
require('./app')(router);
router.start(ENV.DEBUG ? 3000 : 80);