// module.exports
// module.exports.index = function ...
module.exports.getController = function () {
    this.index = function () {
        console.log("Index() is running.");
    }
    this.about = function () {
        console.log("About() is running.");
    }  
    
    return this;
}