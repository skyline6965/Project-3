const express = require ("express");
const router = require("express").Router();
const userController = require("../../controllers/userController");


// Login Page Route - Joe
router.get("/login", (req, res) => res.send("Login"));

router.get("/signup", (req, res) => res.send("Signup"));

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


module.exports = router;
