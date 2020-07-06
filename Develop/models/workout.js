const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({

  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Choose resistance or cardio style workout."
      },
      name: {
        type: String,
        trim: true,
        required: "Input the name of the exercise."
      },
      duration: {
        type: Number,
        required: "How long did the workout last?"
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      weight: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workout;






