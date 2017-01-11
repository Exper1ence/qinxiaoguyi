/**
 * Created by Exper1ence on 2017/1/2.
 */
const Path = require('path');

module.exports = function mathRobot(router) {
    router.static(Path.resolve(__dirname, './public'));
    router.get((res, next) => {
        if(ENV.DEBUG){
            res.sendFile(Path.resolve(__dirname, './public/debug.html'));
        }
        else{
            res.sendFile(Path.resolve(__dirname, './public/index.html'));
        }
    });
};