var zoom = 1;
var isFirst = true;
var rmcls = "v00 v01 v02 v03 v04 v05 v06 v07 v08 v09 v10 v11";
var rangeMax02 = 11;
$(function () {


  $('#range02').on('asRange::change', function (e) {
    // on instance ready
    var value = parseInt($("#range02").asRange('get'));
    var cls = value < 10 ? "0"+value : value;
    $(".sound-status").removeClass(rmcls).addClass("v"+cls);
    $("#range02").asRange('val', value);
  });

  $("body").on("click", ".sound-bar button:eq(0)", function () {
    var value = parseInt($("#range02").asRange('get'));
    if(value > 0){
      value--;
      var cls = value < 10 ? "0"+value : value;
      $(".sound-status").removeClass(rmcls).addClass("v"+cls);
      $("#range02").asRange('val', value);
    }

  })
  $("body").on("click", ".sound-bar button:eq(1)", function () {
    var value = parseInt($("#range02").asRange('get'));
    if(value < rangeMax02){
      value++;
      var cls = value < 10 ? "0"+value : value;
      $(".sound-status").removeClass(rmcls).addClass("v"+cls);
      $("#range02").asRange('val', value);
    }

  })
  $("body").on("click", ".btn-screen-change", function () {
    var ck = $(this).hasClass("on");
    if (ck) {
      $(this).removeClass("on");
      $(".contents").addClass("full");
      $(".btn-play img").attr("src", "../../asset/image/btn/btn-play-full.png");
      rangeMax02 = 11;
    } else {
      $(this).addClass("on");
      $(".contents").removeClass("full");
      $(".btn-play img").attr("src", "../../asset/image/btn/btn-play.png");
      rangeMax02 = 8;
    }
  })
  $("body").on("click", ".btn-item", function () {
    var ck = $(this).hasClass("on");
    if (ck) {
      $(this).removeClass("on");
      $(".quick-sub-wrap").removeClass("on");
    } else {
      $(this).addClass("on");
      $(".quick-sub-wrap").addClass("on");
    }
  })
  $("body").on("click", ".btn-book", function () {
    var ck = $(this).hasClass("on");
    if (ck) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }
  })
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
      $("#range02").asRange('val', "4");
    } else {
      $(this).addClass("on");
      $(this).find("span").text("음소거");
      $("#range02").asRange('val', "0");
      $(".sound-status").removeClass(rmcls).addClass("v00");
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
  $("body").on("click", ".color-change-wrap button", function () {
    $(".color-change-wrap button").removeClass("on");
    $(this).addClass("on");
    var _rmcls = "red orange yellow green blue";
    var _color = $(this).attr("data-color");
    $(".mv-control-wrap").removeClass(_rmcls).addClass(_color);
  })
    // $("body").on("click", ".quick-item-wrap li button", function () {
    //     var ck = $(this).hasClass("on");
    //     if (ck) {
    //         $(this).removeClass("on");
    //     } else {
    //         $(this).addClass("on");
    //     }
    // })

});