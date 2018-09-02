//~~~~~~~~~~Depedencies~~~~~~~~~~//

let express = require("express"),
    router  = express.Router(),
    Content = require("../api/personnalInfoAPI.js");
    
//~~~~~~~~~~Routes~~~~~~~~~~~~~~~//

router.route("/")
      .get()
      .post();
      
router.route("/:id")
      .put()
      .delete();
     
//~~~~~~~~~~Module Exports~~~~~~~//

module.exports = router;