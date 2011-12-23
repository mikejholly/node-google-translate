var rest = require('restler')
  , util = require('util');

exports.translate = function(string, key, string, source, target) {
  var url = util.format('https://www.googleapis.com/language/translate/v2?key=%s&q=%s&source=%s&target=%s', key, string, source, target);
};