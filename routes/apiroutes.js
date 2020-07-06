const Workout = require("../models/workout.js");

module.exports = function (app) {

  //GET Route//
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      });
  });

  //POST Route//
  app.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      });
  });
//PUT Route//
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findAndModify(params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      });
  });
};