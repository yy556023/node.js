module.exports = function (testData) {
    this.testData = testData;
    
    this.index = function () {
        console.log("Index() is running....");
        console.log(this.testData);
    }
    
    this.about = function () {
        console.log("About() is running.");
    }    
}
/* main:
var controllerName = "home";
var actionName = "index";
var module = require("./" + controllerName + ".js");
var obj = new module();
obj[actionName]();
*/
