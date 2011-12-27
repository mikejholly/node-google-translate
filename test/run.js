var translate = require('../lib/translate')
  , assert = require('assert')

var key = 'AIzaSyD5GphQTY4xd6AeKhn-juYBun5cP8uikv0';

translate({key: key, q: 'my test', target: 'fr'}, function(result){
  assert.equal(result['my test'], 'mon test');
});

translate({key: key, q: ['test one', 'test two'], target: 'fr'}, function(result){
  assert.equal(result['test one'], 'tester un');
  assert.equal(result['test two'], 'tester deux');
});