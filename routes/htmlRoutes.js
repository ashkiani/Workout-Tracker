let workouts = [
  {
    exercises: [
      { _id: "5ddea92ec6c23e00179393b1", name: "bench", reps: 6, __v: 0 },
      { _id: "5ddea952c6c23e00179393b2", name: "bench", reps: 6, __v: 0 },
      { _id: "5ddea954c6c23e00179393b3", name: "bench", reps: 6, __v: 0 },
      { _id: "5e37a01b10e9660017355d69", name: "bench", reps: 6, __v: 0 },
      { _id: "5e6ae2432b9cf700173cc895", name: "bench", reps: 10, __v: 0 }
    ],
    _id: "5ddea91ac6c23e00179393b0",
    name: "Strength Training",
    __v: 0
  },
  {
    exercises: [
      { _id: "5de6728e93e9c400179d758b", name: "Test1", reps: 1, __v: 0 },
      { _id: "5de6729093e9c400179d758c", name: "Test1", reps: 1, __v: 0 }
    ],
    _id: "5de6728593e9c400179d758a",
    name: "Test",
    __v: 0
  },
  {
    exercises: [
      { _id: "5e6d919e85810200178816b3", name: ",,", reps: 9, __v: 0 }
    ],
    _id: "5deebd2e9e33a800178cbb61",
    name: "WOrkout",
    __v: 0
  },
  { exercises: [], _id: "5e16ffcbaf676000176081ed", name: "Hoya", __v: 0 },
  { exercises: [], _id: "5e2892e8178e0700175e1957", name: "kk", __v: 0 },
  { exercises: [], _id: "5e2cc1eff2535e00173b5260", name: "hi", __v: 0 },
  {
    exercises: [
      {
        _id: "5dd5aee8b19af90017ba86d6",
        name: "Sit Ups",
        reps: 15,
        __v: 0
      },
      {
        _id: "5dd5aeefb19af90017ba86d7",
        name: "Push Ups",
        reps: 30,
        __v: 0
      },
      {
        _id: "5e2cc206f2535e00173b5262",
        name: "burpees",
        reps: 1000,
        __v: 0
      },
      {
        _id: "5e2d0b490d76960017859086",
        name: "sit ups",
        reps: 100,
        __v: 0
      },
      { _id: "5e3078e69ff27800178b0348", name: "ban", reps: 44, __v: 0 },
      {
        _id: "5e4b32e405139d001717fd8e",
        name: "Russian Twists",
        reps: 10,
        __v: 0
      }
    ],
    _id: "5dd5aeddb19af90017ba86d5",
    name: "Superhot",
    __v: 0
  },
  {
    exercises: [],
    _id: "5e35f6c42645b500178c3787",
    name: "running",
    __v: 0
  },
  {
    exercises: [
      { _id: "5e390aa1f0a2e50017949963", name: "running", reps: 5, __v: 0 }
    ],
    _id: "5e390a8ef0a2e50017949962",
    name: "rest",
    __v: 0
  },
  {
    exercises: [],
    _id: "5e65a99af477ed00175174aa",
    name: "sdsdfsfsdf",
    __v: 0
  },
  {
    exercises: [
      {
        _id: "5e6657df110e9a0017860b03",
        name: "chest press",
        reps: 10,
        __v: 0
      }
    ],
    _id: "5e6657cf110e9a0017860b02",
    name: "bench",
    __v: 0
  },
  {
    exercises: [],
    _id: "5e67065262f0d40017830276",
    name: "Running",
    __v: 0
  },
  {
    exercises: [
      {
        _id: "5e6d15087092020017e740c5",
        name: "Incline dumbbell",
        reps: 22,
        __v: 0
      }
    ],
    _id: "5e6d14ec7092020017e740c4",
    name: "Bench Press",
    __v: 0
  },
  {
    exercises: [
      {
        _id: "5e4b337f05139d001717fd90",
        name: "push-ups",
        reps: 100,
        __v: 0
      },
      { _id: "5e6ab7e94fb0c00017b5f946", name: "sfdsfd", reps: 9, __v: 0 },
      { _id: "5e6fe86184b9bf0017f41d64", name: "l", reps: 123, __v: 0 }
    ],
    _id: "5e4b335405139d001717fd8f",
    name: "Alex's Workout",
    __v: 0
  },
  {
    exercises: [
      { _id: "5e6fe89f84b9bf0017f41d67", name: "a", reps: 123, __v: 0 },
      { _id: "5e6fe8be84b9bf0017f41d69", name: "a", reps: 123, __v: 0 }
    ],
    _id: "5e6fe88e84b9bf0017f41d65",
    name: "new",
    __v: 0
  }
];

module.exports = function(app) {
  // Load index page
  app.get("/", (req, res) => {
    let values = { workouts: workouts };
    console.log(values);
    res.render("index", values);
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
