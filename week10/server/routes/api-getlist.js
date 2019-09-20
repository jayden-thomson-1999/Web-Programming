module.exports = function(app) {
    app.get('/api/getlist', function(req, res) {
        const dbSettings = require('../db-settings');
        dbSettings.MongoClient.connect(dbSettings.url, {poolSize:10,useNewUrlParser: true,
            useUnifiedTopology: true},function(err, client) {
            const dbName = 'mydb';
            const db = client.db(dbName);
            const collection = db.collection('products');
            collection.find({}).toArray((err, data) => {
                res.send(data);
            });
        });
    });
}