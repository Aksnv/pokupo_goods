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
  $(".good-header__menu").toggleClass("good-header__menu--open");
  $(".good-overlay").toggleClass("good-overlay--active");
  $(".good-header__menu-button").toggleClass("good-header__menu-button--close");
  $(".good-header__logo").toggleClass("good-header__logo--open");
  $("html, body").animate({
    scrollTop: $("html").offset().top
  }, 1000);
  return false;
});

$(".good-header__menu-item--2").click(function() {
  $(".good-header__menu").toggleClass("good-header__menu--open");
  $(".good-overlay").toggleClass("good-overlay--active");
  $(".good-header__menu-button").toggleClass("good-header__menu-button--close");
  $(".good-header__logo").toggleClass("good-header__logo--open");
  $("html, body").animate({
    scrollTop: $("#good-details").offset().top
  }, 1000);
  return false;
});

$(".good-header__menu-item--3").click(function() {
  $(".good-header__menu").toggleClass("good-header__menu--open");
  $(".good-overlay").toggleClass("good-overlay--active");
  $(".good-header__menu-button").toggleClass("good-header__menu-button--close");
  $(".good-header__logo").toggleClass("good-header__logo--open");
  $("html, body").animate({
    scrollTop: $("#good-description").offset().top
  }, 1000);
  return false;
});

$(".good-header__menu-item--4").click(function() {
  $(".good-header__menu").toggleClass("good-header__menu--open");
  $(".good-overlay").toggleClass("good-overlay--active");
  $(".good-header__menu-button").toggleClass("good-header__menu-button--close");
  $(".good-header__logo").toggleClass("good-header__logo--open");
  $("html, body").animate({
    scrollTop: $("#good-order").offset().top
  }, 1000);
  return false;
});

$(".good-header__menu-item--5").click(function() {
  $(".good-header__menu").toggleClass("good-header__menu--open");
  $(".good-overlay").toggleClass("good-overlay--active");
  $(".good-header__menu-button").toggleClass("good-header__menu-button--close");
  $(".good-header__logo").toggleClass("good-header__logo--open");
  $("html, body").animate({
    scrollTop: $("#good-reviews").offset().top
  }, 1000);
  return false;
});

$(".good-header__menu-item--6").click(function() {
  $(".good-header__menu").toggleClass("good-header__menu--open");
  $(".good-overlay").toggleClass("good-overlay--active");
  $(".good-header__menu-button").toggleClass("good-header__menu-button--close");
  $(".good-header__logo").toggleClass("good-header__logo--open");
  $("html, body").animate({
    scrollTop: $("#good-reviews").offset().top
  }, 1000);
  return false;
});

$(".good-header__menu-item--7").click(function() {
  $(".good-header__menu").toggleClass("good-header__menu--open");
  $(".good-overlay").toggleClass("good-overlay--active");
  $(".good-header__menu-button").toggleClass("good-header__menu-button--close");
  $(".good-header__logo").toggleClass("good-header__logo--open");
  $("html, body").animate({
    scrollTop: $("#good-order").offset().top
  }, 1000);
  return false;
});


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


/* Good quantity */

$(".quantity-button--forward").click(function() {
  $(".quantity-button--back").removeAttr("disabled");
  var q = $(".good-details__quantity input").val();
  q++;
  $(".good-details__quantity input").val(q);
});

$(".quantity-button--back").click(function() {
  var q = $(".good-details__quantity input").val();
  q--;
  $(".good-details__quantity input").val(q);
  if (q == 1) {
    $(".quantity-button--back").attr("disabled", "disabled");
  }
});


/* Good details gallery */

$(".gallery-image__item").click(function() {
  for (var i = 0; i < $(".gallery-image__item").length; i++) {
    if ($($(".gallery-image__item")[i]).hasClass("gallery-image__item--active")) {
      $($(".gallery-image__item")[i]).removeClass("gallery-image__item--active");
    }
  }
  $(this).addClass("gallery-image__item--active");
  
  var num = $(this).attr("class").charAt(41);
  
  for (var i = 0; i < $(".good-details__view-item").length; i++) {
    if ($($(".good-details__view-item")[i]).hasClass("good-details__view-item--active")) {
      $($(".good-details__view-item")[i]).removeClass("good-details__view-item--active");
    }
  }
  $(".good-details__view-item--" + num).addClass("good-details__view-item--active");

  if (num == 1) {
    $(".gallery-button--back").attr("disabled", "disabled");
    $(".gallery-button--forward").removeAttr("disabled");
  } else if (num == 5) {
    $(".gallery-button--back").removeAttr("disabled");
    $(".gallery-button--forward").attr("disabled", "disabled");
  } else {
    $(".gallery-button--back").removeAttr("disabled");
    $(".gallery-button--forward").removeAttr("disabled");
  }
});

$(".gallery-button--forward").click(function() {
  $(".gallery-button--back").removeAttr("disabled");
  for (var i = 0; i < $(".gallery-image__item").length; i++) {
    if ($($(".gallery-image__item")[i]).hasClass("gallery-image__item--active")) {
      $($(".gallery-image__item")[i]).removeClass("gallery-image__item--active");
      $($(".good-details__view-item")[i]).removeClass("good-details__view-item--active");
      $($(".gallery-image__item")[i + 1]).addClass("gallery-image__item--active");
      $($(".good-details__view-item")[i + 1]).addClass("good-details__view-item--active");
      if (i == 3) {
        $(".gallery-button--forward").attr("disabled", "disabled");
      }
      break;
    }
  }
});

$(".gallery-button--back").click(function() {
  $(".gallery-button--forward").removeAttr("disabled");
  for (var i = 0; i < $(".gallery-image__item").length; i++) {
    if ($($(".gallery-image__item")[i]).hasClass("gallery-image__item--active")) {
      $($(".gallery-image__item")[i]).removeClass("gallery-image__item--active");
      $($(".good-details__view-item")[i]).removeClass("good-details__view-item--active");
      $($(".gallery-image__item")[i - 1]).addClass("gallery-image__item--active");
      $($(".good-details__view-item")[i - 1]).addClass("good-details__view-item--active");
      if (i == 1) {
        $(".gallery-button--back").attr("disabled", "disabled");
      }
      break;
    }
  }
});


/* Good reviews slider */

$(".reviews-button--forward").click(function() {
  $(".reviews-button--back").removeAttr("disabled");
  for (var i = 0; i < $(".good-reviews__item").length; i++) {
    if ($($(".good-reviews__item")[i]).hasClass("good-reviews__item--active")) {
      $($(".good-reviews__item")[i]).removeClass("good-reviews__item--active");
      $($(".good-reviews__pagination-item")[i]).removeClass("good-reviews__pagination-item--active");
      $($(".good-reviews__item")[i + 1]).addClass("good-reviews__item--active");
      $($(".good-reviews__pagination-item")[i + 1]).addClass("good-reviews__pagination-item--active");
      if (i == 2) {
        $(".reviews-button--forward").attr("disabled", "disabled");
      }
      break;
    }
  }
});

$(".reviews-button--back").click(function() {
  $(".reviews-button--forward").removeAttr("disabled");
  for (var i = 0; i < $(".good-reviews__item").length; i++) {
    if ($($(".good-reviews__item")[i]).hasClass("good-reviews__item--active")) {
      $($(".good-reviews__item")[i]).removeClass("good-reviews__item--active");
      $($(".good-reviews__pagination-item")[i]).removeClass("good-reviews__pagination-item--active");
      $($(".good-reviews__item")[i - 1]).addClass("good-reviews__item--active");
      $($(".good-reviews__pagination-item")[i - 1]).addClass("good-reviews__pagination-item--active");
      if (i == 1) {
        $(".reviews-button--back").attr("disabled", "disabled");
      }
      break;
    }
  }
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