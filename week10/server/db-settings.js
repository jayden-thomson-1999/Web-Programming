const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectID;

module.exports.MongoClient = MongoClient;
module.exports.url = url;
module.exports.mongodb = mongodb;
module.exports.ObjectID = ObjectId;