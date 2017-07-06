(window.MSReady = window.MSReady || []).push(function($) {

    "use strict";
    var masterslider_f1de = new MasterSlider();

    // slider controls
    masterslider_f1de.control('arrows', {
        autohide: true,
        overVideo: true
    });
    // slider setup
    masterslider_f1de.setup("MS5959c16dcf1de", {
        width: 1745,
        height: 980,
        minHeight: 0,
        space: 0,
        start: 1,
        grabCursor: true,
        swipe: true,
        mouse: true,
        keyboard: false,
        layout: "fullscreen",
        wheel: false,
        autoplay: true,
        instantStartLayers: false,
        mobileBGVideo: false,
        loop: true,
        shuffle: false,
        preload: 0,
        heightLimit: true,
        autoHeight: false,
        smoothHeight: true,
        endPause: false,
        overPause: true,
        fillMode: "fill",
        centerControls: true,
        startOnAppear: false,
        layersMode: "center",
        autofillTarget: "",
        hideLayers: false,
        fullscreenMargin: 0,
        speed: 40,
        dir: "h",
        parallaxMode: 'mouse',
        view: "basic"
    });


    $("head").append("<link rel='stylesheet' id='ms-fonts'  href='//fonts.googleapis.com/css?family=Raleway:regular' type='text/css' media='all' />");

    window.masterslider_instances = window.masterslider_instances || [];
    window.masterslider_instances.push(masterslider_f1de);
});

(window.MSReady = window.MSReady || []).push(function($) {

    "use strict";
    var masterslider_9dcd = new MasterSlider();

    // slider controls
    masterslider_9dcd.control('arrows', {
        autohide: true,
        overVideo: true
    });
    // slider setup
    masterslider_9dcd.setup("MS5959c14ca9dcd", {
        width: 1920,
        height: 840,
        minHeight: 0,
        space: 0,
        start: 1,
        grabCursor: true,
        swipe: true,
        mouse: true,
        keyboard: false,
        layout: "fullwidth",
        wheel: false,
        autoplay: true,
        instantStartLayers: false,
        mobileBGVideo: false,
        loop: true,
        shuffle: false,
        preload: 0,
        heightLimit: true,
        autoHeight: false,
        smoothHeight: true,
        endPause: false,
        overPause: true,
        fillMode: "fill",
        centerControls: true,
        startOnAppear: false,
        layersMode: "center",
        autofillTarget: "",
        hideLayers: false,
        fullscreenMargin: 0,
        speed: 40,
        dir: "h",
        parallaxMode: 'mouse',
        view: "basic"
    });


    window.masterslider_instances = window.masterslider_instances || [];
    window.masterslider_instances.push(masterslider_9dcd);
});

(window.MSReady = window.MSReady || []).push(function($) {
    "use strict";
    var masterslider_f202 = new MasterSlider();

    // slider controls
    masterslider_f202.control('arrows', {
        autohide: true,
        overVideo: true
    });
    // slider setup
    masterslider_f202.setup("MS5959d33cbf202", {
        width: 1920,
        height: 840,
        minHeight: 0,
        space: 0,
        start: 1,
        grabCursor: true,
        swipe: true,
        mouse: true,
        keyboard: false,
        layout: "fullwidth",
        wheel: false,
        autoplay: true,
        instantStartLayers: false,
        mobileBGVideo: false,
        loop: true,
        shuffle: false,
        preload: 0,
        heightLimit: true,
        autoHeight: false,
        smoothHeight: true,
        endPause: false,
        overPause: true,
        fillMode: "fill",
        centerControls: true,
        startOnAppear: false,
        layersMode: "center",
        autofillTarget: "",
        hideLayers: false,
        fullscreenMargin: 0,
        speed: 40,
        dir: "h",
        parallaxMode: 'mouse',
        view: "basic"
    });


    window.masterslider_instances = window.masterslider_instances || [];
    window.masterslider_instances.push(masterslider_f202);
});

(function($) {
    "use strict";

    var experts_slider_64073 = new Swiper('.experts-slider-64073', {
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false,
        nextButton: '.experts-next-64073',
        prevButton: '.experts-prev-64073',
        slidesPerView: 3,
        loop: true,
        breakpoints: {
            // when window width is <= 320px
            500: {
                slidesPerView: 1,
                spaceBetweenSlides: 10
            },
            1024: {
                slidesPerView: 2,
                spaceBetweenSlides: 10
            },
        }
    });
})(jQuery);

(function($) {
    "use strict";

    var experts_slider_91361 = new Swiper('.experts-slider-91361', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.experts-next-91361',
        prevButton: '.experts-prev-91361',
        slidesPerView: 3,
        loop: true,
        breakpoints: {
            // when window width is <= 320px
            500: {
                slidesPerView: 1,
                spaceBetweenSlides: 10
            },
            1024: {
                slidesPerView: 2,
                spaceBetweenSlides: 10
            },
        }
    });
})(jQuery);

(function($) {
    "use strict";
    var gallery_slider_74881 = new Swiper('.gallery-slider-74881', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.gallery-next-74881',
        prevButton: '.gallery-prev-74881',
        slidesPerView: 1,
    });
})(jQuery);
(function($) {
    "use strict";
    var slide_skin_76200 = new Swiper('.slide-skin-76200', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.product-next-76200',
        prevButton: '.product-prev-76200',
        slidesPerView: 4,
        breakpoints: {
            // when window width is <= 320px
            500: {
                slidesPerView: 1,
                spaceBetweenSlides: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetweenSlides: 10
            },
        }
    });
})(jQuery);

(function($){
    'use strict';
    $('.wrticksy').click(function(event) {
        $("#wr-toolbar-open").toggleClass('active-open');
        setTimeout(function(){
            $("#wr-toolbar").toggleClass('active');
        }, 150);
        return false;
    });
})( jQuery, window, document );
