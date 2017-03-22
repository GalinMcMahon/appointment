$(document).ready(function() {
   $(".btn").click(function() {
    $(".container").hide();
   $(".confirmation").show();
});

  $("#formOne").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var descInput = $("input#desc").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();

    $(".yourName").text(yourNameInput);
    $(".desc").text(descInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);

    // $("#letter").show();

    // event.preventDefault();
    event.preventDefault();
  });
});
