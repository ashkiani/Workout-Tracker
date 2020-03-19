const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", async (req, res) => {
    let dbRoutine = await db.Workout.find({});
    res.status(200).send(dbRoutine);
  });

  app.post("/api/workout", async (req, res) => {
    console.log("POST data received at /api/workout:");
    console.log(req.body);
    const newWorkout = new db.Workout(req.body);
    try {
      let dbRoutine = await db.Workout.create(newWorkout);
      res.status(200).send(dbRoutine);
    } catch (err) {
      res.status(400).send(err._message);
      console.log(err._message);
    }
  });
  app.post("/api/exercise", async (req, res) => {
    console.log("POST data received at /api/exercise:");
    console.log(req.body);
    console.log(res);

    let exerciseInfo = {
      name: req.body.excName,
      reps: req.body.excReps
    };
    const newExercise = new db.Exercise(exerciseInfo);
    try {
      let addExercise = await db.Exercise.create(newExercise);
      try {
        let dbRoutine = await db.Workout.findOneAndUpdate(
          { _id: req.body.workoutId },
          { $push: { exercises: addExercise._id } },
          { new: true }
        );
        res.status(200).send(dbRoutine);
      } catch (err) {
        res.status(400).send(err);
      }
    } catch (err) {
      res.status(400).send(err);
    }
  });
};
