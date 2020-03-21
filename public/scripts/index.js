$(document).ready(function() {
  console.log("ready!");
  function showError(msg) {
    let errEl = $("#error");
    let errModalEl = $("#errorModal");
    errEl.html(msg);
    errModalEl.modal("show");
  }

  function generateNewExEl(excName, excReps) {
    let newExerciseEl = $("<div>");
    newExerciseEl.addClass("col-3 mx-3 my-1 border");
    newExerciseEl.html(excName + " (" + excReps + ")");
    return newExerciseEl;
  }

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
        showError(err.responseJSON.message);
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
        let exercisesEl = $("#exercises" + workoutId);
        if (exercisesEl.length) {
          let newExerciseEl = generateNewExEl(excName, excReps);
          exercisesEl.append(newExerciseEl);
        } else {
          let listEl = $("#list-" + workoutId);
          let titleDivEl = $("<div>");
          titleDivEl.html("Existing exercises");
          let rowEl = $("<div>");
          rowEl.addClass("row");
          rowEl.attr("id", "exercises" + workoutId);
          let newExerciseEl = generateNewExEl(excName, excReps);
          rowEl.append(newExerciseEl);
          listEl.prepend(rowEl);
          listEl.prepend(titleDivEl);
        }
      },
      error: err => {
        showError(err.responseJSON.message);
      }
    });
  });
});
