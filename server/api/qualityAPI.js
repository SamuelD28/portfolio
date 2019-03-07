// ~~~~~Dependency and Declaration~~~~~~//
const mongoose = require('mongoose');
const Api = {};

// ~~~~~~~~~~~~~Model~~~~~~~~~~~~~~~~~~//

const Schema = mongoose.Schema;
const qualitySchema = new Schema({
  Title: {
    type: String,
    required: true,
    trim: true,
  },
  Image: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
    trim: true,
  },
});
const Quality = mongoose.model('Quality', qualitySchema);

// ~~~~~~~~~~~~Api Methods~~~~~~~~~~~~~//

Api.GetQuality = function(req, res) {
  Quality.find()
      .then((content) => {
        res.json(content);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
};

Api.PostQuality = function(req, res) {
  Quality.create(req.body)
      .then((content) => {
        console.log(content);
      })
      .catch((err) => {
        console.log(err);
      });
};

Api.UpdateQuality = function(req, res) {
  Quality.findByIdAndUpdate(req.params.id)
      .then((content) => {
        console.log(content);
      })
      .catch((err) => {
        console.log(err);
      });
};

Api.DeleteQuality = function(req, res) {
  Quality.findByIdAndDelete(req.params.id)
      .then(function() {
        console.log('[-Deleted Content-]');
      })
      .catch((err) => {
        console.log(err);
      });
};

// ~~~~~~~~~~Exportation~~~~~~~~~~~//

module.exports = {Api: Api, Model: Quality};
