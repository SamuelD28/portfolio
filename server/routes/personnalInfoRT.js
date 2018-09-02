//~~~~~~~~~~Depedencies~~~~~~~~~~//

let express         = require("express"),
    router          = express.Router(),
    PersonnalInfo   = require("../api/personnalInfoAPI.js");
    
//~~~~~~~~~~Routes~~~~~~~~~~~~~~~//

router.route("/")
      .get(PersonnalInfo.Api.GetPersonnalInfo)
      .post(PersonnalInfo.Api.PostPersonnalInfo);
      
router.route("/:id")
      .put(PersonnalInfo.Api.UpdatePersonnalInfo)
      .delete(PersonnalInfo.Api.DeletePersonnalInfo);
     
//~~~~~~~~~~Module Exports~~~~~~~//

module.exports = router;