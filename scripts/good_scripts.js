/* Menu button */

$(".good-header__menu-button").click(function() {
  $(this).toggleClass("good-header__menu-button--close");
  $(".good-header__logo").toggleClass("good-header__logo--open");
  $(".good-header__menu").toggleClass("good-header__menu--open");
  $(".good-overlay").toggleClass("good-overlay--active");
});


/* Popup form */

$(".button--popup").click(function() {
  $(".good-overlay").addClass("good-overlay--active");
  $(".good-popup").addClass("good-popup--active");
  $("body").css("overflowY", "hidden");
});

$(".close-button").click(function() {
  $(".good-overlay").removeClass("good-overlay--active");
  $(".good-popup").removeClass("good-popup--active");
  $("body").css("overflowY", "scroll");
});


/* Page scroll */

$(".good-header__menu-item--1").click(function() {
  $("html, body").animate({
    scrollTop: $("html").offset().top
  }, 1000);
  return false;
});

$(".good-header__menu-item--2").click(function() {
  $("html, body").animate({
    scrollTop: $("#good-details").offset().top
  }, 1000);
  return false;
});

/*$(".good-header__menu-item--3").click(function() {
  $("html, body").animate({
    scrollTop: $("#good-program").offset().top
  }, 1000);
  return false;
});*/

$(".good-header__menu-item--4").click(function() {
  $("html, body").animate({
    scrollTop: $("#good-reviews").offset().top
  }, 1000);
  return false;
});

/*$(".good-header__menu-item--5").click(function() {
  $("html, body").animate({
    scrollTop: $("#good-map").offset().top
  }, 1000);
  return false;
});*/


/* Offer counter */

function countdownCounter() {
  var finishDate = new Date(2018, 9, 1);
  var curentDate = new Date();

  if ((curentDate - finishDate) >= 0) {
    $(".offer-counter__days").text(0);
    $(".offer-counter__hours").text(0);
    $(".offer-counter__minutes").text(0);
    $(".offer-counter__seconds").text(0);
  } else {
    var time = finishDate - curentDate;
    var days = Math.floor(time / (24 * 3600 * 1000));
    var hours = Math.floor((time / (24 * 3600 * 1000) - days) * 24);
    var minutes = Math.floor((((time / (24 * 3600 * 1000) - days) * 24) - hours) * 60);
    var seconds = Math.floor((((((time / (24 * 3600 * 1000) - days) * 24) - hours) * 60) - minutes) * 60);

    if (days < 10) {
      $(".offer-counter__days").text("0" + days);
    } else {
      $(".offer-counter__days").text(days);
    }
    if (hours < 10) {
      $(".offer-counter__hours").text("0" + hours);
    } else {
      $(".offer-counter__hours").text(hours);
    }
    if (minutes < 10) {
      $(".offer-counter__minutes").text("0" + minutes);
    } else {
      $(".offer-counter__minutes").text(minutes);
    }
    if (seconds < 10) {
      $(".offer-counter__seconds").text("0" + seconds);
    } else {
      $(".offer-counter__seconds").text(seconds);
    }
  }
};

setInterval(countdownCounter, 1000);


/* Reviews carousel */

$(".reviews-button--forward").click(function() {
  $(".reviews-button--back").removeAttr("disabled");
  for (var i = 0; i < $(".good-reviews__block").length; i++) {
    if ($($(".good-reviews__block")[i]).hasClass("good-reviews__block--active")) {
      $($(".good-reviews__block")[i]).removeClass("good-reviews__block--active");
      $($(".good-reviews__block")[i + 1]).addClass("good-reviews__block--active");
      if (i == 1) {
        $(".reviews-button--forward").attr("disabled", "disabled");
      }
      break;
    }
  }
  for (var j = 0; j < $(".good-reviews__pagination-item").length; j++) {
    if ($($(".good-reviews__pagination-item")[j]).hasClass("good-reviews__pagination-item--active")) {
      $($(".good-reviews__pagination-item")[j]).removeClass("good-reviews__pagination-item--active");
      $($(".good-reviews__pagination-item")[j + 1]).addClass("good-reviews__pagination-item--active");
      break;
    }
  }
});

$(".reviews-button--back").click(function() {
  $(".reviews-button--forward").removeAttr("disabled");
  for (var i = 0; i < $(".good-reviews__block").length; i++) {
    if ($($(".good-reviews__block")[i]).hasClass("good-reviews__block--active")) {
      $($(".good-reviews__block")[i]).removeClass("good-reviews__block--active");
      $($(".good-reviews__block")[i - 1]).addClass("good-reviews__block--active");
      if (i == 1) {
        $(".reviews-button--back").attr("disabled", "disabled");
      }
      break;
    }
  }
  for (var j = 0; j < $(".good-reviews__pagination-item").length; j++) {
    if ($($(".good-reviews__pagination-item")[j]).hasClass("good-reviews__pagination-item--active")) {
      $($(".good-reviews__pagination-item")[j]).removeClass("good-reviews__pagination-item--active");
      $($(".good-reviews__pagination-item")[j - 1]).addClass("good-reviews__pagination-item--active");
      break;
    }
  }
});


/* Reviews pagination */

$(".good-reviews__pagination-item").click(function() {
  $(".good-reviews__pagination-item").removeClass("good-reviews__pagination-item--active");
  $(".good-reviews__block").hide();
  $(".good-reviews__block").removeClass("good-reviews__block--active");
  $(this).addClass("good-reviews__pagination-item--active");
  var num = $(this).attr("class").charAt(67);
  $(".good-reviews__block--" + num).show();
  $(".good-reviews__block--" + num).addClass("good-reviews__block--active");
});


/* Good ordering - Upload file name */

$(".good-ordering__file--1 .good-ordering__upload-file input[type='file']").change(function() {
  var fileName_1 = $(this).val().replace(/.*\\/, "");
  if (fileName_1 != "") {
    $(".good-ordering__file--1 .good-ordering__file-name").val(fileName_1);
    $(".good-ordering__file--1 .good-ordering__upload-file").addClass("good-ordering__upload-file--uploaded");
  } else {
    $(".good-ordering__file--1 .good-ordering__file-name").val("");
    $(".good-ordering__file--1 .good-ordering__upload-file").removeClass("good-ordering__upload-file--uploaded");
  }
});

$(".good-ordering__file--2 .good-ordering__upload-file input[type='file']").change(function() {
  var fileName_2 = $(this).val().replace(/.*\\/, "");
  if (fileName_2 != "") {
    $(".good-ordering__file--2 .good-ordering__file-name").val(fileName_2);
    $(".good-ordering__file--2 .good-ordering__upload-file").addClass("good-ordering__upload-file--uploaded");
  } else {
    $(".good-ordering__file--2 .good-ordering__file-name").val("");
    $(".good-ordering__file--2 .good-ordering__upload-file").removeClass("good-ordering__upload-file--uploaded");
  }
});


/* Good ordering - Delete file button */

$(".good-ordering__file--1 .good-ordering__delete-file").click(function(e) {
  e.preventDefault();
  $(".good-ordering__file--1 .good-ordering__upload-file input[type='file']").val("");
  $(".good-ordering__file--1 .good-ordering__file-name").val("");
  $(".good-ordering__file--1 .good-ordering__upload-file").removeClass("good-ordering__upload-file--uploaded");
});

$(".good-ordering__file--2 .good-ordering__delete-file").click(function(e) {
  e.preventDefault();
  $(".good-ordering__file--2 .good-ordering__upload-file input[type='file']").val("");
  $(".good-ordering__file--2 .good-ordering__file-name").val("");
  $(".good-ordering__file--2 .good-ordering__upload-file").removeClass("good-ordering__upload-file--uploaded");
});


/* Back-to-top button */

(function () {
  window.addEventListener("scroll", function(event) {
    if ($(window).scrollTop() == 0) {
      document.querySelector(".back-to-top").classList.remove("back-to-top--visible");
    } else {
      document.querySelector(".back-to-top").classList.add("back-to-top--visible");
    }
  });
}());

$(".back-to-top").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});


/* jQuery Form Styler activation */

(function($) {
$(function() {

  $('select').styler();
    
});
})(jQuery);