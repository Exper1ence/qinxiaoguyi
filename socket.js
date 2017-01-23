/**
 * Created by Exper1ence on 2016/12/26.
 */
const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const https = require('https');
const Path = require('path');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore(
    {
        uri: 'mongodb://localhost:27017/blog',
        collection: 'Sessions',
    });
store.on('error', function (e) {
    console.log(e);
});
// const webpackConfig = require('./webpack.config');
// const compiler = require('webpack')(webpackConfig);
app.set('trust proxy', 1);
module.exports = {
    Router: Express.Router,
    publicPath: '',
    maxAge: 3600000,
    SessionStore: store,
    rest(path, router, ...params){
        // router.get('/', require(Path.resolve(path, './gets'))(...params));
        // router.post('/', require(Path.resolve(path, './post'))(...params));
        // router.delete('/', require(Path.resolve(path, './deletes'))(...params));
        // router.get('/:id', require(Path.resolve(path, './get'))(...params));
        // router.put('/:id', require(Path.resolve(path, './put'))(...params));
        // router.delete('/:id', require(Path.resolve(path, './delete'))(...params));
        // return router;
    },
    handleStatic(path, options){
        app.use(Express.static(path, options));
        this.publicPath = path;
    },
    start(port, router){
        port = process.env.PORT || port;
        app.use(bodyParser.json());
        app.use(session({
            secret: 'Gakk1mylove',
            resave: !!0,
            saveUninitialized: !!0,
            store,
        }));
        app.use(router);
        app.use((req, res, next) => {
            console.log(req.url);
            res.sendFile(Path.resolve(this.publicPath, 'index.html'));
        });
        app.use((error, req, res, next) => {
            console.log(req.url);
            console.log(error);
            res.send('invalid operation');
        });
        app.listen(port, () => {
            console.log(`server is listening at ${port}.`);
        });
    },
};