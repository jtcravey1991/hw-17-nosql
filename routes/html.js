const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.sendFile("index.html")
})

router.get("/exercise", function(req, res) {
    res.sendFile("exercise.html");
})

router.get("/stats", function(req, res) {
    res.sendFile("stats.html");
})