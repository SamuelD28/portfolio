//~~~~~~~~~~Dependency and Declaration~~~~~//
    
let express = require("express"),
    router  = express.Router(),
    Work    = require("../api/workAPI.js");
    
//~~~~~~~~~~~Routes~~~~~~~~~~~~//

router.route("/")
      .get(Work.Api.GetWorks)
      .post(Work.Api.PostWork);

router.route("/:id")
      .put(Work.Api.UpdateWork)
      .delete(Work.Api.DeleteWork);
      
//~~~~~~~~~~~~~Exprotation~~~~~~~~//

module.exports = router;

