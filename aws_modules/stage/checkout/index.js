/**
 * AWS Module: Action: Modularized Code
 */

 var action = require('../../../lib/checkout');

// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
  console.log(event.url);
  return action(event.url)
    .then(function(result) {
      cb(null, result);
    })
    .error(function(err) {
      cb(err, null);
    });
};
