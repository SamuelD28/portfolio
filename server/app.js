/*  Author: Samuel Dube
    Date of Creation: 2018/07/22
    Description: This is the entry point for server that serve samdube.com
*/

// ---------Dependencies----------//

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// ---------Initialisation----------//

// Database
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/portfolio', {useNewUrlParser: true});
app.use(express.static(__dirname + '/media'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// ---------Routing----------//

const PersonnalInfoRT = require('./routes/personnalInfoRT.js');
const QualityRT = require('./routes/qualityRT.js');
const WorkRT = require('./routes/workRT.js');
const SkillRT = require('./routes/skillRT.js');

app.use('/api/personnalinfo', PersonnalInfoRT);
app.use('/api/work', WorkRT);
app.use('/api/skill', SkillRT);
app.use('/api/quality', QualityRT);

// ---------Listener----------//

app.listen(process.env.PORT, process.env.IP, function(err) {
  if (err) {
    console.log('[-An error occured while starting the server-] \n' + err);
  } else {
    console.log('[-Server started successfully-]');
  }
});
