//~~~~~Dependency and Declaration~~~~~~//
let mongoose    = require("mongoose"),
    Api         = new Object();

//~~~~~~~~~~~~~Model~~~~~~~~~~~~~~~~~~//

let Schema = mongoose.Schema;
let qualitySchema = new Schema({
    Title: {
        type: String,
        required: true,
        trim: true
    },
    Image:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true,
        trim: true
    }
});
let Quality = mongoose.Object("Quality", qualitySchema);

//~~~~~~~~~~~~Api Methods~~~~~~~~~~~~~//

Api.GetQuality = function(req, res){
    throw new Error("Not implemented");
}

Api.PostQuality = function(req, res){
    throw new Error("Not implemented");    
}

Api.UpdateQuality = function(req, res){
    throw new Error("Not implemented");
}

Api.DeleteQuality = function(req, res){
    throw new Error("Not implemented");
}

//~~~~~~~~~~Exportation~~~~~~~~~~~//

module.exports = {Api: Api, Model: Quality};