var translate = require('../lib/translate')
  , assert = require('assert')

var key = '<your-secret>';

translate({key: key, q: 'my test', target: 'fr'}, function(result){
  assert.equal(result['my test'], 'mon test');
});

translate({key: key, q: ['test one', 'test two'], target: 'fr'}, function(result){
  assert.equal(result['test one'], 'tester un');
  assert.equal(result['test two'], 'tester deux');
});