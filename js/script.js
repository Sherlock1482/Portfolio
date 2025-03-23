

  // Filter using jQuery
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show(1000);
    } else {
      $(".post")
        .not(`.${value}`)
        .hide(1000);
      $(".post")
        .filter(`.${value}`)
        .show(1000);
    }
  });

  // Sticky Navbar on Scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#navbar-top").addClass("fixed-top");
      // Add padding top to show content behind navbar
      let navbarHeight = $(".navbar").outerHeight();
      $("body").css("padding-top", navbarHeight + "px");
    } else {
      $("#navbar-top").removeClass("fixed-top");
      // Remove padding top from body
      $("body").css("padding-top", "0");
    }
  });

  // Back to Top Button Functionality
  let myButton = $("#btn-back-to-top");

  // Show button when scroll down 20px
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      myButton.fadeIn();
    } else {
      myButton.fadeOut();
    }
  });

  // Scroll to the top when clicked
  myButton.click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

