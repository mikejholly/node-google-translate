var request = require('request')
  , _ = require('underscore')
  , querystring = require('querystring')
  , util = require('util')

module.exports = function(opts, callback) {
  opts = _.defaults(opts, {
      source: 'en'
    , target: 'fr'
    , key: 'secret'
    , q: 'text'
  });
  var url = 'https://www.googleapis.com/language/translate/v2?' + querystring.stringify(opts);
  request.get(url, function(err, response, body){
    if (err) throw err;
    var json = JSON.parse(body);
    if (json.error) {
      throw json.error.message;
    }
    var strings = util.isArray(opts.q) ? opts.q : [opts.q];
    var result = {};
    strings.forEach(function(orig, i){
      result[orig] = json.data.translations[i].translatedText;
    });
    callback(result);
  });
};

