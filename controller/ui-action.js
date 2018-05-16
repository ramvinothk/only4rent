var _ = require("underscore");
var homeLayout = "layout/home-layout.html";

var UIAction = function (app) {
    this.app = app;
    this.conf = app.conf;
};

module.exports = UIAction;

// Index page
UIAction.prototype.getIndexPage = function(req,res){

    var reqUrl = req.headers.host;
    // res.render("home/home.html", {layout: homeLayout,conf: this.conf, branding: this.conf.branding, reqUrl: reqUrl});
    res.render("index.html", {layout: false,conf: this.conf, branding: this.conf.branding, reqUrl: reqUrl});

};

UIAction.prototype.getHomePage = function(req,res){

    var reqUrl = req.headers.host;
    // res.render("home/home.html", {layout: homeLayout,conf: this.conf, branding: this.conf.branding, reqUrl: reqUrl});
    res.render("index.html", {layout: homeLayout,conf: this.conf, branding: this.conf.branding, reqUrl: reqUrl});

};
