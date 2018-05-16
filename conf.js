
var _ = require("underscore");
var conf = {};
var ENV =

    //"development";
//"test";
"production";

var envconf = require("./conf/conf-" + ENV + ".js");
//var sys_props = require('./conf/system-properties.js');
//conf = _.extend(envconf, sys_props);
//conf.project = require('./conf/project-properties.js');

conf = _.extend(envconf);

module.exports = conf;