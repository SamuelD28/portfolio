//~~~~~~~~Dependency and Declaration~~~~//

let mongoose = require("mongoose"),
    Api      = new Object();

//~~~~~~~~~~Model~~~~~~~~//

let Schema = mongoose.Schema;
let skillSchema = new Schema({
    Title: {
        type: String
    },
    Pourcentage:{
        type: Number
    },
    Category:{
        type: String
    }
});
let Skill = mongoose.Object("Skill" , skillSchema);

//~~~~~~~~~~Api Methopds~~~~~~~~~~~~//

Api.GetSkills = function(req, res){
    
}

Api.PostSkill = function(req, res){
    
}

Api.UpdateSkill = function(req, res){
    
}

Api.DeleteSkill = function(req, res){
    
}

//~~~~~~~~~~~~Exportation~~~~~~~~~~~//

module.exports = {Api: Api, Model: Skill};

    
