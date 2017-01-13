/**
 * Created by Exper1ence on 2016/12/26.
 */
const Express = require('express');
const app = Express();
const router = Express.Router();
const bodyParser = require('body-parser');
const https = require('https');

module.exports = {
    get(cb){
        router.get('*', (req, res, next) => {
            cb(res, next);
        })
    },
    post(cb){
        router.post('/', (req, res, next) => {
            cb(req.body, res, next);
        });
    },
    static(path, options){
        app.use(Express.static(path, options));
    },
    start(port){
        port = process.env.PORT || port;
        app.use(bodyParser.json());
        app.use(router);
        app.listen(port, () => {
            console.log(`server is listening at ${ port}.`);
        });
        
    },
};