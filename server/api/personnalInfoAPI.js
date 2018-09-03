//---------Dependencies---------//

let mongoose = require("mongoose"),
    Api      = new Object();

//---------Mongoose Schema and Model---------//

let Schema  = mongoose.Schema;
let personnalInfoSchema = new Schema({
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
});
let PersonnalInfo = mongoose.model("PersonnalInfo" , personnalInfoSchema); 

//--------Core Code-------//

Api.GetPersonnalInfo  = function(req, res){
    PersonnalInfo.findOne()
           .then((content) =>{
                res.json(content);
           })
           .catch((err) => {
                if(err)
                    console.log(err);
           });
};

Api.PostPersonnalInfo  = function(req, res){
    PersonnalInfo.create(req.body)
           .then((content) => {
               console.log(content);
           })
           .catch((err) => {
               console.log(err);
           });
}

Api.UpdatePersonnalInfo   = function(req, res){
    PersonnalInfo.findByIdAndUpdate(req.params.id)
           .then((content) => {
                console.log(content);  
           })
           .catch((err) =>{
                console.log(err); 
           });
}

Api.DeletePersonnalInfo = function(req, res){
    PersonnalInfo.findByIdAndDelete(req.params.id)
           .then(function(){
               console.log("[-Deleted Content -]")
           })
           .catch((err)=>{
               console.log(err);
           })
}

//---------Module Exports---------//

module.exports = {Api: Api, Model: PersonnalInfo};