module.exports = function(app) {
    const dbSettings = require('../db-settings');
    app.post('/api/update', function(req, res) {
        if(!req.body) return res.sendStatus(400);
        
        dbSettings.MongoClient.connect(dbSettings.url, {poolSize:10,useNewUrlParser: true,
            useUnifiedTopology: true},function(err, client) {
            if(err) throw new Error(err);

            const dbName = 'mydb';
            const db = client.db(dbName);
            
            product = req.body;
            var objectid = new dbSettings.ObjectID(product.objid);
            const collection = db.collection('products');
            collection.updateOne({_id:objectid},
                    { $set:{name:product.name,units:product.units}}, () => {
                res.send({ 'ok': product.objid });
            });
        }); 
    });
}