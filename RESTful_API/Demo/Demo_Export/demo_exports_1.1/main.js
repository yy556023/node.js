// http://myLab/home/index
// http://myLab/home/about
var controllerName = "home";
var actionName = "index";
var module = require("./" + controllerName + ".js");
var testData = 100;
var obj = new module(testData);
obj[actionName]();
// obj["about"]();
// obj.index();
// obj.about();


