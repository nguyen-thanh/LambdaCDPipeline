/**
 * AWS Module: Action: Modularized Code
 */

 var action = require('../../../lib/checkout');
 var s3upload = require('../../../lib/s3upload');

// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
  console.log(event.url);
  return action(event.url)
    .then(s3upload)
    .then(function(result) {
      cb(null, result);
    })
    .error(function(err) {
      cb(err, null);
    });
};
