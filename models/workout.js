const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: "Enter a date for the workout"
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Select a type of workout"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter a name for your workout"
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
