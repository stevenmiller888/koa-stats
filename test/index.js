
/**
 * Dependencies.
 */

var request = require('supertest');
var stats   = require('../lib');
var assert  = require('assert');
var koa     = require('koa');

/**
 * Tests.
 */

describe('koa-stats', function(){
  it('should take options', function(done){
    var app = koa();
    app.use(stats({ path: '/ping' }));
    
    request(app.listen())
      .get('/ping')
      .expect(200)
      .end(done);
  });

  it('should 200 for /stats', function(done){
    var app = koa();
    app.use(stats());
    
    request(app.listen())
      .get('/stats')
      .expect(200)
      .end(done);
  });

  it('should 404 for anything else', function(done){
    var app = koa();
    app.use(stats());
    
    request(app.listen())
      .get('/example')
      .expect(404)
      .end(done);
  });
});
