var git = require("nodegit").Clone,
    Promise = require("bluebird");

module.exports = function(url) {
  return new Promise(function(resolve, reject) {
    git.clone(url, "/tmp/checkout", null)
      .then(function() {
        resolve("/tmp/checkout");
      })
      .catch(function(err) {
        console.log(err);
        reject("Clone failed");
      });
  });
};
