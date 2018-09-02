//~~~~~~~~~Dependency and Declaration~~~~~~~~~~~//

let express = require("express"),
    router  = express.Router(),
    Quality = require("../api/qualityAPI.js");
    
//~~~~~~~~~Routes~~~~~~~~~~~~~~~~~~~//

router.route("/")
      .get(Quality.Api.GetQuality)
      .post(Quality.Api.PostQuality);
      
router.route("/:id")
      .put(Quality.Api.UpdateQuality)
      .delete(Quality.Api.DeleteQuality);
      
//~~~~~~~~~Exportation~~~~~~~~~~~~~~//
    
module.exports = router;