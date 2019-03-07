// ~~~~~~~~Dependency and Declaration~~~~//

const mongoose = require('mongoose');
const Api = {};

// ~~~~~~~~~~Model~~~~~~~~//

const Schema = mongoose.Schema;
const skillSchema = new Schema({
  Title: {
    type: String,
  },
  Pourcentage: {
    type: Number,
  },
  Category: {
    type: String,
  },
});
const Skill = mongoose.model('Skill', skillSchema);

// ~~~~~~~~~~Api Methopds~~~~~~~~~~~~//

Api.GetSkills = function(req, res) {
  Skill.find()
      .then((content) => {
        res.json(content);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
};

Api.PostSkill = function(req, res) {
  Skill.create(req.body)
      .then((content) => {
        console.log(content);
      })
      .catch((err) => {
        console.log(err);
      });
};

Api.UpdateSkill = function(req, res) {
  Skill.findByIdAndUpdate(req.params.id)
      .then((content) => {
        console.log(content);
      })
      .catch((err) => {
        console.log(err);
      });
};

Api.DeleteSkill = function(req, res) {
  Skill.findByIdAndDelete(req.params.id)
      .then(function() {
        console.log('[-Deleted Content -]');
      })
      .catch((err) => {
        console.log(err);
      });
};

// ~~~~~~~~~~~~Exportation~~~~~~~~~~~//

module.exports = {Api: Api, Model: Skill};


