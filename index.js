/**
 * Created by Exper1ence on 2017/1/2.
 */
const router = require('./router');

require('./app')(router);
router.start(3000);