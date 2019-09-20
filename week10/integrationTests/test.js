const assert = require('assert');
const app = require('../server/server.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const should = chai.should();
chai.use(chaiHttp);

const testData = {"id": 20, "name": "another thing", "units": 2};
const testId = {"productid": "5d8438858c59eb3ba48f2af6"};
const testUpdate = {"objid": "5d840dc8963fd43094b72168", "id": "5", "name": "other thing", "units": "2"}

describe('Server test', function() {
    describe('/api/add', function() {
        it("should have status 200", function(done) {
            chai.request(app).post('/api/add').type('form')
                .send(testData)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it("should have correct body params", function(done) {
            chai.request(app).post('/api/add').type('form')
            .send(testData)
            .end((err, res) => {
                res.body.should.have.property('num');
                res.body.should.have.property('err');
                done();
            });
        });
    });

    describe('/api/prodcount', function() {
        it("should have 200 status", function(done) {
            chai.request(app).get('/api/prodcount')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });

        it("should correct body params", function(done) {
            chai.request(app).get('/api/prodcount')
            .end((err, res) => {
                res.body.should.have.property('count');
                done();
            });
        });
    });

    describe('/api/getlist', function() {
        it("should have 200 status", function(done) {
            chai.request(app).get('/api/getlist')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });

        it("should correct body params", function(done) {
            chai.request(app).get('/api/getlist')
            .end((err, res) => {
                res.body.should.be.a("array");
                done();
            });
        });        
    });

    describe('/api/getitem', function() {
        it("should have 200 status", function(done) {
            chai.request(app).post('/api/getitem').type("form")
                .send(testId)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it("should have correct body params", function(done) {
            chai.request(app).post('/api/getitem').type("form")
                .send(testId)
                .end((err, res) => {
                    res.body.should.be.a("array");
                    // res.body.should.have.lengthOf(1);
                    // res.body[0].should.have.property("_id");
                    // res.body[0].should.have.property("id");
                    // res.body[0].should.have.property("name");
                    // res.body[0].should.have.property("units");
                    done();
                });
        });
    });

    describe('/api/deleteitem', function() {
        it("should have 200 status", function(done) {
            chai.request(app).post('/api/deleteitem').type("form")
                .send(testData)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it("should have correct body params", function(done) {
            chai.request(app).post('/api/deleteitem').type("form")
            .send(testId)
            .end((err, res) => {
                res.body.should.be.a("array");
                done();
            });
        });
    });

    describe('/api/update', function() {
        it("should have 200 status", function(done) {
            chai.request(app).post('/api/update').type("form")
                .send(testUpdate)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});