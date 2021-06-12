// http://myLab/home/index
// http://myLab/home/about
var controllerName = "home";
var actionName = "index";
var module = require("./" + controllerName + ".js");
var obj = new module();
obj[actionName]();
// obj["about"]();
// obj.index();
// obj.about();


