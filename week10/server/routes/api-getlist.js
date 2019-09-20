module.exports = function(app) {
    const dbSettings = require('../db-settings');
    app.get('/api/getlist', function(req, res) {
        dbSettings.MongoClient.connect(dbSettings.url, {poolSize:10,useNewUrlParser: true,
            useUnifiedTopology: true},function(err, client) {
            if(err) throw new Error(err);

            const dbName = 'mydb';
            const db = client.db(dbName);
            const collection = db.collection('products');
            collection.find({}).toArray((err, data) => {
                res.send(data);
            });
        });
    });
}