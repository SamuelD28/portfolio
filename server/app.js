/*  Author: Samuel Dube
    Date of Creation: 2018/07/22
    Description: This is the entry point for server that serve samdube.com
*/

//---------Dependencies----------//

let express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    methodOverride      = require("method-override"),
    mongoose            = require("mongoose"),
    dataseed            = require("./dataseed.js");

//---------Initialisation----------//

//Database
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/portfolio", {useNewUrlParser : true});
app.use(express.static(__dirname + "/../front-end/css"));
app.use(express.static(__dirname  + "/../front-end/js"));
app.use(express.static(__dirname  + "/../front-end/media"));
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views" , __dirname + "/../front-end/views");

//---------Routing----------//

let ContentRT = require("./routes/personnalInfoRT.js");

app.use("/content" , ContentRT);

//---------Listener----------//

app.listen(process.env.PORT, process.env.IP, function(err){
    if(err)
        console.log("[-An error occured while starting the server-] \n" + err);
    else
        console.log("[-Server started successfully-]")
});