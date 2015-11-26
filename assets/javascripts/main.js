(function() {
  function openSearchInput() {
    $(".search-icon").on("click", function(e) {
      e.stopPropagation();
      if (!$(this).parent().hasClass("active")) {
        $(this).parent().addClass("active");
      } else {
        if (!$(this).siblings("#search").val().length) {
          $(this).parent().removeClass("active");
        }
      }
    });
  }

  $(function () {
    // Инициализация выпадающего меню
    runOnLoad(Dropdown.initialise);
    // Открывание инпута с поиском
    if ($(".search-field").length) {
      openSearchInput();
    }
    // Инициализация слайдера
    if ($(".slider").length) {
      $(".slider").carouFredSel({
        responsive: true,
        items: {
          visible: 1,
          width: 1920
        },
        scroll: {
          fx: "crossfade",
          duration: 1000,
          timeoutDuration: 3000,
          pauseOnHover: true
        },
        auto: {
          delay: 3000
        },
        align: "center",
        pagination: ".pagination",
        prev: {
          button  : "#prev"
        },
        next: {
          button  : "#next"
        }
      });
      $(".slider .slider-ref").hover(
        function () {
          $(".slider").trigger("stop");
        },
        function () {
          $(".slider").trigger("play", true);
        }
      );
    }
  });
})();
