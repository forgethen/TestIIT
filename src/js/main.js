'use strict';

$(document).ready(function() {

  $(document.body).on('click', 'a.slow', function() {
    var e = $(this).attr("href"),
      k = $(e).offset().top;
    return $("html,body").animate({
      scrollTop: k
    }, 750), !1
  });

  function eachBGattr() {
    $('.squares__item').each(function() {
      var imgURL = $(this).find('img').attr('src');
      $(this).css('backgroundImage', 'url(' + imgURL + ')');
    });
  };
  eachBGattr();

  function randomAddShow() {
    $(".squares__item").removeClass('show')
    var n = 4;
    var len = $(".squares__item").length;
    for (var i = 0; i < n; i++) {
      var random = Math.floor(Math.random() * len) + 1;
      $(".squares__item").eq(random).addClass('show');
      // console.log(random);
    }
  };

  randomAddShow();

  setInterval(function () {
    randomAddShow();
  }, 5000);


});

//# sourceMappingURL=main.js.map
