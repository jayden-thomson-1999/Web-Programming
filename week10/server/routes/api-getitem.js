module.exports = function(db, app, ObjectID) {
    app.post('/api/getitem', function(req, res) {
        if (!req.body) return res.sendStatus(400);

        let productID = req.body.productid;
        let objectid = new ObjectID(productID);
        const collection = db.collection('products');

        collection.find({_id: objectid}).limit(1).toArray((err, data) => {
            res.send(data);
        });

    });
}