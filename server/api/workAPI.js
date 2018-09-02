//~~~~~~~~~Dependency and Declaration~~~~~~~~~//
    
let mongoose = require("mongoose"),
    Api      = new Object();
    
//~~~~~~~~~Model~~~~~~~~~~//

let Schema      = mongoose.Schema;
let workSchema  = new Schema({
    Title: {
        type: String,
        required: true
    },
    Images: [{
        type: String,
        required: true
    }],
    Legend: {
        type: String,
        maxLength: 100,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    KeyFeatures: [{
        type: String
    }]
});
let Work = mongoose.model("Work", workSchema);

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