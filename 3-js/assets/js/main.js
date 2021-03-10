$(document).ready(function () {
  $("#menu-button").click(function () {
    if ($("#menu").hasClass("-active")) {
      $("#menu").removeClass("-active");
    } else {
      $("#menu").addClass("-active");
    }
  });
});

$(document).ready(function () {
  $(".video").click(function () {
    $("#video-cover").addClass("-inactive");
  });
});

$(document).ready(function () {
  $(".item").click(function () {
    if ($(".item").hasClass("-active")) {
      $(".item").removeClass("-active");
    } else {
      $(".item").addClass("-active");
    }
  });
});
