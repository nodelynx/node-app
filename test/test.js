var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with Pakistan Zindabad', function(done) {
 //navigate to root and check the the response is "Hello world"
 request(app).get('/').expect('Pakistan Zindabad', done);
 });
});
