const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", async (req, res) => {
    let dbRoutine = await db.Workout.find({});
    res.status(200).send(dbRoutine);
  });

  app.post("/api/workout", async (req, res) => {
    console.log("POST data received at /api/workout:");
    console.log(req.body);
    console.log(res);
  });

  app.post("/api/exercise", async (req, res) => {
    console.log("POST data received at /api/exercise:");
    console.log(req.body);
    console.log(res);
  });
};
