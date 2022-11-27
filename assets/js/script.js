//StrikeThrough functionality

$("ul").on("click", "li", function () {
  $(this).toggleClass("done");
});

// deleting

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(200, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

// Adding

$("input").keypress(function (event) {
  if (event.which === 13) {
    let task = $("input").val();
    $("ul").append(
      "<li><span class='delete'> <i class='fa fa-trash'></i></span>" + task + "</li>"
    );
    $("input").val("");
  }
});

//toggling the input form

$("#plus").click(function () {
  $("li").fadeToggle();
});
