
/*******************************************************************************************
 * Require
 ******************************************************************************************/
var tode = require('tode');
var _ = require('underscore');
var WebUtils = require('./actions/web-utils.js');

var conf = require('./conf.js');
conf.branding = require('./conf/branding.js').url;

/*******************************************************************************************
 * Variable
 ******************************************************************************************/

var projectPath = {
    root: __dirname,
    views: __dirname + '/views',
    static: __dirname + '/webapps'
};

/*******************************************************************************************
 * HTTP Server Startup
 ******************************************************************************************/

var http = {};
var app = {};

try {

    http = tode.HTTP;
    var sessionCheck = tode.HTTP
    httpConf = conf['web'];
    httpConf['root'] = projectPath.root;
    httpConf['views'] = projectPath.views;
    httpConf['static'] = projectPath.static;
    httpConf['session'] = conf['session'];
    app = http.start(httpConf);
    app.sessionCheck = http.sessionCheck;
    app.conf = conf;

    app.locals._ = _;
    app.locals.webUtils = new WebUtils();
}

catch (err) {
    console.log('Error @ HTTP Server Initialization : ' + err);
}

/*******************************************************************************************
 * Global Exception Handler
 ******************************************************************************************/
process.on('uncaughtException', function(err) {
    console.log('Exception handled @ [SIM GATEWAY NODE] uncaughtException' + err.stack);
});

/*******************************************************************************************
 * Routes
 ******************************************************************************************/
var ui_routes = require("./routes/ui-routes.js");
var uiRoutes = new ui_routes(app);
uiRoutes.init();

