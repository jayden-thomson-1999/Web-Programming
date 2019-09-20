module.exports = function(app) {
    const dbSettings = require('../db-settings');
    app.post('/api/checkvalid', function(req, res) {
        if (!req.body) return res.sendStatus(400);
        
        dbSettings.MongoClient.connect(dbSettings.url, {poolSize:10,useNewUrlParser: true,
            useUnifiedTopology: true},function(err, client) {
            if(err) throw new Error(err);

            const dbName = 'mydb';
            const db = client.db(dbName);
            const production = req.body;
            const collection = db.collection('products');

            collection.find({'id': production.id}).count((err, count) => {
                if(count == 0) res.send({success: 1, topnum: 0});

                else {
                    collection.find({}, {sort: {id: -1}, limit:1})
                    .toArray(function(err, items) {
                        if(err) res.send({  err });
                        res.send({success: 0, topnum: items[0].id});
                    });
                }
            });
        });    
    });
}