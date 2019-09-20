module.exports = function(app) {
    const dbSettings = require('../db-settings');
    app.post('/api/add', function(req, res) {
        if(!req.body) return res.sendStatus(400);

        dbSettings.MongoClient.connect(dbSettings.url, {poolSize:10,useNewUrlParser: true,
            useUnifiedTopology: true},function(err, client) {
            if(err) throw new Error(err);

            const dbName = 'mydb';
            const db = client.db(dbName);
            product = req.body;
            const collection = db.collection('products');
    
            collection.find({ 'id': product.id }).count((err, count) => {
                if(count == 0) {
                    collection.insertOne(product, (err, dbres) => {
                        if (err) throw err;
                        let num = dbres.insertedCount;
                        res.send({'num': num, err: null});
                    });
                } else {
                    res.send({num: 0, err: 'duplicate item'});
                }
            });
        });
    });
}