$(document).ready(function () {
  $(".cut .navs .prev").click(function () {
    $(".cut .owl-prev").click();
  });

  $(".cut .navs .next").click(function () {
    $(".cut  .owl-next").click();
  });

  $(".owl-carousel33").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  });

  $(".js-foward-amount").on("keyup change", function () {
    $(".js-foward-amount").not($(this)).val($(this).val());
    $(".js-deposit-amount").val($(this).val());
    calculate();
  });
  var clipboard = new ClipboardJS(".copiedwallet");

  clipboard.on("success", function (e) {
    $(".copied").fadeIn(222);
    setTimeout(function () {
      $(".copied").fadeOut(222);
    }, 2000);
    e.clearSelection();
  });

  $(".alert span").click(function () {
    $(this).parent().parent().fadeOut(333);
  });

  $(".popup a.closex").click(function () {
    closex();
  });

  $(".popup .faq_content .fa").click(function () {
    $(this).toggleClass("active");
    $(this).find(".a").slideToggle(333);
  });

  $(".burger").click(function () {
    $(".navflow").toggleClass("active");
    $("#bg-popup2").fadeToggle(333);
  });

  $(".scroll-pane").jScrollPane();

  $(".defaultbanner").click();
  calculate();

  if ($(window).width() > 992) {
    $(".owl-carousel2").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1200: {
          items: 2,
        },
      },
    });

    $(".navs .prev2").click(function () {
      $(".tab .owl-prev").click();
    });

    $(".navs .next2").click(function () {
      $(".tab  .owl-next").click();
    });
  }
});

function flowhide() {
  $(".navflow").removeClass("active");
  $("#bg-popup2").fadeOut(333);
}

function WithdrawalPopup(type, amount, limit) {
  $(".js-withdrawal-amount").html(amount + " TRX");
  $(".js-withdrawal-limit").html(limit + " TRX");
  $(".js-withdrawal-button").attr("data-type", type);
  if (type == "com") {
    $(".js-com-text").slideDown(0);
    $(".js-div-text").slideUp(0);
  } else {
    $(".js-div-text").slideDown(0);
    $(".js-com-text").slideUp(0);
  }
  popup(".confirm");
}

function showMessage(type, message) {
  $(".alert." + type).fadeIn(333);
  $(".alert." + type + " .text").html(message);

  setTimeout(function () {
    $(".alert").fadeOut(333);
  }, 5000);
}

function tabs(n) {
  event.preventDefault();
  $(".tabs a").removeClass("active");
  $(".tabs a.t_" + n).addClass("active");
  $(".popup .tab").hide();
  $(".popup .tab_" + n).show();
}

function hint(id) {
  $(id).addClass("showvisible");

  setTimeout(function () {
    $(id).removeClass("showvisible");
  }, 5000);
}

$(document).ready(function () {
  $(".navflow ul li").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    flowhide();
    var id = $(this).attr("href");
    if (typeof $(id).offset() == "undefined") {
      id = "." + $(this).attr("class");
    }

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate(
      {
        scrollTop: $(id).offset().top,
      },
      1500
    );
  });

  $(".nav").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    var id = $(this).attr("href");
    if (typeof $(id).offset() == "undefined") {
      id = "." + $(this).attr("class");
    }

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate(
      {
        scrollTop: $(id).offset().top,
      },
      1500
    );
  });
});

function faq(n) {
  event.preventDefault();
  $(".faq .tabs a").removeClass("active");
  $(".faq .tabs a.f_" + n).addClass("active");
  $(".faq .faq_content .ft").hide();
  $(".faq .faq_content .f" + n).show();
}

function popup(n) {
  event.preventDefault();

  $(".popup").fadeOut(222);

  $(n).fadeIn(444);
  $(n).css("top", $(window).scrollTop() + 50 + "px");

  // $('body').addClass('hid');
  // $('body').css('height',$(n).height()+200+'px')

  $("#bg-popup").fadeIn(333);
  return false;
}

function calculate() {
  var amount = $(".js-foward-amount").val();
  var contractBonus = $(".js-foward-amount").attr("data-contractBonus");
  var refBonus = $(".js-foward-amount").attr("data-refBonus");
  var holdBonus = $(".js-foward-amount").attr("data-holdBonus");
  var totalBonus = holdBonus + refBonus + contractBonus;
  $(".js-calc-daily").html(((amount / 100) * totalBonus).toFixed(2) + " TRX");
  $(".js-calc-hourly").html((((amount / 100) * totalBonus) / 24).toFixed(2) + " TRX");
  $(".js-calc-end").html((amount * 3.2).toFixed(2) + " TRX");
}

function closex() {
  event.preventDefault();
  //  $('body').css('height','')
  $("body").removeClass("hid");
  $(".popup").fadeOut(222);
  $("#bg-popup").fadeOut(333);

  return false;
}
