const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", function(req, res) {
    Workout.find({})
})