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

  function createMap() {
    var mapdiv = document.getElementById("map");
    mapdiv.style.width = '50%';
    mapdiv.style.height = '100%';
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 55.7545945, lng: 37.872545},
      zoom: 14
    });
    var markerImage = {
      url: "assets/images/marker.png"
    };
    var infoOfficeWindow = new google.maps.InfoWindow({
      content: "<div class='info-window'>МО, г. Реутов, Юбилейный пр-кт, д. 30/2</div>"
    });
    var infoStorageWindow = new google.maps.InfoWindow({
      content: "<div class='info-window'>МО, г. Реутов, Никольская ул.</div>"
    });
    var officeMarker = new MarkerWithLabel({
      position: {lat: 55.749483, lng: 37.865000},
      icon: markerImage,
      draggable: false,
      raiseOnDrag: false,
      map: map,
      labelContent: "Офис",
      labelAnchor: new google.maps.Point(-22, 25),
      labelClass: "labels"
    });
    google.maps.event.addListener(officeMarker, 'click', function() {
      infoOfficeWindow.open(map, officeMarker);
    });
    var storageMarker = new MarkerWithLabel({
      position: {lat: 55.758864, lng: 37.877173},
      icon: markerImage,
      draggable: false,
      raiseOnDrag: false,
      map: map,
      labelContent: "Склад",
      labelAnchor: new google.maps.Point(-22, 25),
      labelClass: "labels"
    });
    google.maps.event.addListener(storageMarker, 'click', function() {
      infoStorageWindow.open(map, storageMarker);
    });
  }

  function openCallbackForm() {
    $(".contacts-form-ref").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).parents("body").find(".callback-form").addClass("active");
    });
    $(".callback-form .close-icon").on("click", function(e) {
      e.preventDefault();
      $(this).parents(".callback-form").removeClass("active");
    });
  }

  $(function () {

    // Инициализация выпадающего меню
    runOnLoad(Dropdown.initialise);
    // Открывание инпута с поиском
    if ($(".search-field").length) {
      openSearchInput();
    }
    // Инициализация карты
    if ($("#map").length) {
      createMap();
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
      // Открывание и закрывание формы
      if ($(".callback-form").length) {
        openCallbackForm();
        $(document).on("click", function(e) {
          if (!$(e.target).parents(".callback-form").length) {
            if ($(".callback-form").hasClass("active")) {
              $(".callback-form").removeClass("active");
            }
          }
        });
      }
    }
  });
})();
