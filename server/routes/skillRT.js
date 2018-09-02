//~~~~~~~~~~~Dependency and Declaration~~~~~~~~~//

let express = require("express"),
    router  = express.Router(),
    Skill   = require("../api/skillApi.js");

//~~~~~~~~~Routing~~~~~~~~~~~~//

router.route("/")
      .get(Skill.Api.GetSkills)
      .post(Skill.Api.PostSkill);
      
router.route("/:id")
      .put(Skill.Api.UpdateSkill)
      .delete(Skill.Api.DeleteSkill);
      
//~~~~~~~~~~Exprotation~~~~~~~~~~//

module.exports = router;