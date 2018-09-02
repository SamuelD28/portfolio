//~~~~~~~~~Dependency and Declaration~~~~~~~~~//
    
let mongoose = require("mongoose"),
    Api      = new Object();
    
//~~~~~~~~~Model~~~~~~~~~~//

let Schema      = mongoose.Schema;
let workSchema  = new Schema({
    Title: {
        type: String
    },
    Images: [{
        type: String
    }],
    Description: {
        type: String
    },
    KeyFeatures: [{
        type: String
    }]
});
let Work = mongoose.Object("Work", workSchema);

//~~~~~~~~~~~~Api Methods~~~~~~~~~//

Api.GetWorks = function(req, res){
    
}

Api.PostWork = function(req, res){
    
}

Api.UpdateWork = function(req, res){
    
}

Api.DeleteWork = function(req , res){
    
}

//~~~~~~~~~~~~Exportation~~~~~~~~~~~~//

module.exports = {Api: Api, Model: Work};