const underConstructionMsg = { message: "UNDER CONSTRUCTION" };

module.exports = function(app) {
  app.get("/api/workouts", async (req, res) => {
    res.send(underConstructionMsg);
  });
};
