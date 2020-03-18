$(document).ready(function() {
  console.log("ready!");
  $("#btnAdd").click(function() {
    console.log($("#workoutTitle").val());
    alert("Handler for adding new workout.");
  });
  $(".btnExcReps").click(function() {
    console.log($("#excName" + this.id).val());
    console.log($("#excReps" + this.id).val());
    alert("Handler for adding new exercise." + this.id);
  });
});
