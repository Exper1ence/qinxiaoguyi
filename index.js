/**
 * Created by Exper1ence on 2017/1/2.
 */
global.ENV = require('./ENV');
const socket = require('./socket');
require('./db')((models) => {
    require('./app')(socket, models).start(80);
});
//asd
