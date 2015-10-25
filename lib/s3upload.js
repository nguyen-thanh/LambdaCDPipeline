var s3 = require("s3");
var shortid = require("shortid");
var Promise = require("bluebird");

var client = s3.createClient({
  s3Options: {
    accessKeyId: "",
    secretAccessKey: ""
  }
});

module.exports = function(source) {
var buildId = 1251;
var params = {
  localDir: source,
  deleteRemoved: true,
  s3Params: {
    Bucket: "ocd-builds",
    Prefix: buildId + "/checkout"
  }
};

return new Promise(function(resolve, reject) {
  client.uploadDir(params)
    .on("end", function() {
       resolve(buildId);
    })
    .on("error", function(err){
       reject(err);
    });
});

};
