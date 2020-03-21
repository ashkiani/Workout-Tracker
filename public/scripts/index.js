$(document).ready(function() {
  console.log("ready!");
  $("#btnAdd").click(function() {
    let workoutTitle = $("#workoutTitle").val();
    console.log(workoutTitle);
    $.ajax({
      url: "/api/workout",
      data: { name: workoutTitle },
      method: "POST",
      success: () => {
        location.reload();
      },
      error: err => {
        alert(err.responseJSON.message);
      }
    });
  });
  $(".btnExcReps").click(function() {
    let workoutId = this.id;
    let excName = $("#excName" + this.id).val();
    let excReps = $("#excReps" + this.id).val();
    let exc = { workoutId: workoutId, excName: excName, excReps: excReps };

    $.ajax({
      url: "/api/exercise",
      data: exc,
      method: "POST",
      success: () => {
        let exercisesEl = $("#exercises");
        let newExerciseEl = $("<div>");
        newExerciseEl.addClass("col-3 mx-3 my-1 border");
        newExerciseEl.html(excName + " (" + excReps + ")");
        exercisesEl.append(newExerciseEl);
      },
      error: err => {
        alert(err.responseJSON.message);
      }
    });
  });
});
