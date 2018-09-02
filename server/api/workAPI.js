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
    Work.find()
           .then((content) =>{
                res.json(content);
           })
           .catch((err) => {
                if(err)
                    console.log(err);
           });
}

Api.PostWork = function(req, res){
    Work.create(req.body)
           .then((content) => {
               console.log(content);
           })
           .catch((err) => {
               console.log(err);
           });
}

Api.UpdateWork = function(req, res){
    Work.findByIdAndUpdate(req.params.id)
           .then((content) => {
                console.log(content);  
           })
           .catch((err) =>{
                console.log(err); 
           });
}

Api.DeleteWork = function(req , res){
    Work.findByIdAndDelete(req.params.id)
           .then(function(){
               console.log("[-Deleted Content -]")
           })
           .catch((err)=>{
               console.log(err);
           })
}

//~~~~~~~~~~~~Exportation~~~~~~~~~~~~//

module.exports = {Api: Api, Model: Work};