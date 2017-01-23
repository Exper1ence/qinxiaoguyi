const URL = 'mongodb://localhost:27017/blog';
const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;
const context = require('./context');
module.exports = function (cb) {
    const client = mongodb.MongoClient;
    client.connect(URL, function (err, db) {
        if (err)throw err;
        const handleClose = (e) => {
            db.close(() => {
                console.log(e);
                process.exit(0);
            });
        };
        process.on('SIGINT', handleClose);
        process.on('uncaughtException', handleClose);
        context.db = db;
        cb({
            ID: id => new ObjectID(id),
            Post: require('./models').Post,
            Rest: require('./Rest'),
            Session: require('./Session'),
        });
    });
};