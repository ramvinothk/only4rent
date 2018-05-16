/* ************************************************************************
 * Import required modules
 * ***********************************************************************/
var uiAction = require('../controller/ui-action.js');
var _ = require('underscore')


var UIRoutes = function (app) {
    this.app = app;
    this.conf=app.conf;
    this.actionInstance = new uiAction(app);
};

module.exports = UIRoutes;

UIRoutes.prototype.init = function () {
console.log(5665)
    var app = this.app;
    var conf = this.conf;
    var isAuthorized = app.sessionCheck;
    var actionInstance = this.actionInstance;

    /*-------------------------- UI Routes ----------------------------*/

    //Init Routes
    app.get("/", function (req, res) {
        actionInstance.getIndexPage(req, res);
    });
    app.get("/home", function (req, res) {
        actionInstance.getHomePage(req, res);
    });

}