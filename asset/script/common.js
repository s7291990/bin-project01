var zoom = 1;
var isFirst = true;

$(function () {

  $("body").on("click", ".mv-control-wrap .btn-play", function () {
    var ck = $(this).hasClass("on");
    if (ck) {
      $(this).removeClass("on");
      $(this).find("span").text("재생하기");
    } else {
      $(this).addClass("on");
      $(this).find("span").text("정지하기");
    }
  })
  $("body").on("click", ".mv-control-wrap .btn-sound", function () {
    var ck = $(this).hasClass("on");
    if (ck) {
      $(this).removeClass("on");
      $(this).find("span").text("음량조절");
    } else {
      $(this).addClass("on");
      $(this).find("span").text("음소거");
    }
  })
  $("body").on("click", ".btn-chat", function () {
    $(".mv-book-title").addClass("chatType");
    $(".mv-desc-wrap").removeClass("on");
    $(".mv-desc-wrap:eq(1)").addClass("on");
  })
  $("body").on("click", ".btn-close", function () {
    $(".mv-book-title").removeClass("chatType");
    $(".mv-desc-wrap").removeClass("on");
    $(".mv-desc-wrap:eq(0)").addClass("on");
  })
    $("body").on("click", ".quick-item-wrap li button", function () {
        var ck = $(this).hasClass("on");
        if (ck) {
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
        }
    })

});