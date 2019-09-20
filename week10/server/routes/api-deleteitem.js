module.exports = function(app) {
    const dbSettings = require('../db-settings');
    app.post('/api/deleteitem', function(req, res) {
        if(!req.body) return res.sendStatus(400);

        dbSettings.MongoClient.connect(dbSettings.url, {poolSize:10,useNewUrlParser: true,
            useUnifiedTopology: true},function(err, client) {
            if(err) throw new Error(err);

            const dbName = 'mydb';
            const db = client.db(dbName);

            let productID = req.body.productid;
            let objectid = new dbSettings.ObjectID(productID);
            const collection = db.collection('products');
            
            collection.deleteOne({ _id: objectid }, (err, docs) => {
                collection.find({}).toArray((err, data) => {
                    res.send(data);
                })
            });
        });
    });
}