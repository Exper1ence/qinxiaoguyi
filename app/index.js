/**
 * Created by Exper1ence on 2017/1/2.
 */
const Path = require('path');

module.exports = function mathRobot({Router, rest, start, handleStatic, maxAge, SessionStore,}, models) {
    handleStatic(Path.resolve(__dirname, './public'));
    return {
        start(port){
            start(port, require('./routes')(Object.assign({Router, rest, maxAge, SessionStore,}, models)));
        },
    }
};