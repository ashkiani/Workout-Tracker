const db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", async (req, res) => {
    let dbRoutine = await db.Workout.find({}).populate("exercises");
    console.log(dbRoutine);
    dbRoutine = dbRoutine.map(workout => {
      return {
        exercises: workout.exercises.map(exercise => {
          return {
            _id: exercise._id.toString(),
            name: exercise.name,
            reps: exercise.reps,
            __v: exercise.__v
          };
        }),
        _id: workout._id.toString(),
        name: workout.name,
        __v: workout.__v
      };
    });
    let values = { workouts: dbRoutine };
    console.log("Data being send to the home page:");
    console.log(values);
    res.render("index", values);
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
