$(document).ready(function () {
  $("#gallery-ad-1").lightSlider({
    onSliderLoad: function (el) {},
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 8,
    slideMargin: 0,
    enableDrag: false,
    currentPagerPosition: "center",
    onSliderLoad: function (el) {
      el.lightGallery({
        selector: "#gallery-ad-1 .lslide",
      });
    },
  });

  $("#gallery-ad-2").lightSlider({
    onSliderLoad: function (el) {},
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 10,
    slideMargin: 0,
    enableDrag: false,
    currentPagerPosition: "center",
    onSliderLoad: function (el) {
      el.lightGallery({
        selector: "#gallery-ad-2 .lslide",
      });
    },
  });

  $("#gallery-ad-3").lightSlider({
    onSliderLoad: function (el) {},
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 8,
    slideMargin: 0,
    enableDrag: false,
    currentPagerPosition: "center",
    onSliderLoad: function (el) {
      el.lightGallery({
        selector: "#gallery-ad-3 .lslide",
      });
    },
  });

  $("#gallery-ad-4").lightSlider({
    onSliderLoad: function (el) {},
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 9,
    slideMargin: 0,
    enableDrag: false,
    currentPagerPosition: "center",
    onSliderLoad: function (el) {
      el.lightGallery({
        selector: "#gallery-ad-4 .lslide",
      });
    },
  });
});
