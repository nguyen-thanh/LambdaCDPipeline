var exec = require('child_process').exec,
    Promise = require("bluebird");

module.exports = function() {
  return new Promise(function(resolve, reject) {
    exec("sudo yum install -y git", function(err) {
      console.log(err);
      if (err) {
        reject("install failed");
      }
      else {
        resolve("success");
      }
    });
  });
};


child = exec("sudo yum install -y git");
// Log process stdout and stderr
child.stdout.on('data', console.log);
child.stderr.on('data', console.error);
