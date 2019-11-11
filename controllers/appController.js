const router = require("express").Router();
const appController = require("../../controllers/appController");

// Matches with "/api/appointments"
router.route("/")
  .get(appController.findAll)
  .post(appController.create);

// Matches with "/api/appointments/:id"
router
  .route("/:id")
  .get(appController.findById)
  .put(appController.update)
  .delete(appController.remove);

module.exports = router;