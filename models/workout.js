const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise type: ",
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise name: ",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Exercise duration in minutes: ",
      },
      distance: {
        type: Number,
        trim: true,
        requred: "Distance (miles): ",
      },
      weight: {
        type: Number,
        trim: true,
        required: "Weight in lbs: ",
      },
      reps: {
        type: Number,
        trim: true,
        required: "Number of reps: ",
      },
      sets: {
        type: Number,
        trim: true,
        required: "Number of sets: ",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;