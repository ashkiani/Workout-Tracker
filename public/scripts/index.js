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
      method: "POST"
    });
  });
});
