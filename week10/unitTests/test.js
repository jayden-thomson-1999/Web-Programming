const assert = require('assert');
const linearPoint = require('../linearPoint');

describe('Tests for linearPoint function', () => {
    describe('Test cases 1 - linearPoint function', () => {
        it('m: 2, x:1, c:4, should return 6', () => {
            assert.equal(linearPoint(2,1,4), 6);
        });
    });

    describe('Test cases 2 - linearPoint function', () => {
        it('m: 2, x:0, c:4, should return 4', () => {
            assert.equal(linearPoint(2,0,4), 4);
        });
    });

    describe('Test cases 3 - linearPoint function', () => {
        it('m: 2, x:-1, c:4, should return 2', () => {
            assert.equal(linearPoint(2,-1,4), 2);
        });
    });
});