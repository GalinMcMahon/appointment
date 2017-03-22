$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var yourNameInput = $("input#yourName").val();

    $(".yourName").text(yourNameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
