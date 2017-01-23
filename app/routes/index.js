module.exports = function (arg) {
    const router = new arg.Router();
    router.get('/', (req, res) => {
        res.send('不存在！');
        console.log(req.url);
    });
    router.use('/posts', require('./Posts')(arg));
    router.use('/session', require('./Session')(arg));
    return router;
};