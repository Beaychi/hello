(function ($) {
  "use strict";

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass("start-style").addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass("start-style");
      }
    });
  });

  //Animation

  $(document).ready(function () {
    $("body.hero-anime").removeClass("hero-anime");
  });

  //Menu On Hover

  $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest(".nav-item");
      _d.addClass("show");
      setTimeout(function () {
        _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 1);
    }
  });
})(jQuery);

function afterLoad() {
  // After Load function body!
}

//scrolling down to the mission section//

$(document).ready(function () {
  // Smooth scrolling to the "Hero" section when clicking the "Find Out" link
  $("#scroll-findout").click(function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    var targetId = "#hero"; // ID of the target section
    var targetPosition = $(targetId).offset().top; // Get the target's position from the top of the page
    $("html, body").animate(
      {
        scrollTop: targetPosition,
      },
      1000
    ); // Scroll smoothly to the target over 1000 milliseconds (1 second)
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the "Explore Now" button by its ID
  const exploreButton = document.getElementById("exploreButton");

  // Get the "features" section by its ID
  const featuresSection = document.getElementById("features");

  // Add a click event listener to the button
  exploreButton.addEventListener("click", function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Scroll to the "features" section
    featuresSection.scrollIntoView({ behavior: "smooth" });
  });
});
