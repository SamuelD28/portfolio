//---------Dependencies---------//

let mongoose = require("mongoose");

//---------Initialisation---------//

let Api = new Object();

//---------Mongoose Schema and Model---------//

let Schema  = mongoose.Schema;
let contentSchema = new Schema({
    Name: {
        type: String
    },
    Age: {
        type: Number
    },
    Phone: {
        type: Number
    },
    Email:{
        type: String
    },
    ProfilImage:{
        type: String
    },
    Description:{
        type: String
    },
    Occupation: {
        type: String
    },
    Adress: {
        City:{
            type: String
        },
        Province:{
            type: String
        },
        PostalCode: {
            type: String
        },
        Country: {
            type: String
        }
    },
    Qualities:[{
        Title: {
            type: String
        },
        Image:{
            type: String
        },
        Description:{
            type: String
        }
    }],
    Skills:[{
        Title: {
            type: String
        },
        Pourcentage:{
            type: Number
        },
        Category:{
            type: String
        }
    }],
    Works:[{
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
    }]
});
let Content = mongoose.model("Content" , contentSchema); 

//--------Core Code-------//

Api.GetContent  = function(req, res){
    Content.Find()
           .then((content) =>{
                res.json(content);
           })
           .catch((err) => {
                if(err)
                    console.log(err);
           });
};

Api.PostContent  = function(req, res){
    Content.Create(req.body)
           .then((content) => {
               console.log(content);
           })
           .catch((err) => {
               console.log(err);
           });
}

Api.UpdateContent   = function(req, res){
    Content.FindByIdAndUpdate(req.params.id)
           .then((content) => {
                console.log(content);  
           })
           .catch((err) =>{
                console.log(err); 
           });
}

Api.DeleteContent = function(req, res){
    Content.FindByIdAndDelete(req.params.id)
           .then(function(){
               console.log("[-Deleted Content -]")
           })
           .catch((err)=>{
               console.log(err);
           })
}

//---------Module Exports---------//

module.exports = Api;