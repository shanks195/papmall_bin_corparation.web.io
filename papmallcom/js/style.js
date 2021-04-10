$(function () {
    $(document).on("click", "body .dropdown-menu", function (e) {
        e.stopPropagation();
    });
    var sliderInit = function () {
        $(".top-search-slider").slick({
            infinite: true,
            dots: false,
            slidesToShow: 3,
            swipeToSlide: true,
            arrows: true,
            variableWidth: true,
            prevArrow: '<div class="slick-prev"></div>',
            nextArrow: '<div class="slick-next"></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true,
                    },
                },
            ],
        });
        $(".slider-home-product").slick({
            infinite: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                    },
                },
            ],
        });
        $(".category-slider").slick({
            infinite: true,
            dots: true,
            slidesToShow: 5,
            rows: 2,
            swipeToSlide: true,
            arrows: false,
            prevArrow: '<div class="slick-prev"></div>',
            nextArrow: '<div class="slick-next"></div>',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });
        $(".product-slider").slick({
            infinite: true,
            dots: false,
            slidesToShow: 5,
            swipeToSlide: true,
            arrows: true,
            prevArrow: '<div class="slick-prev"></div>',
            nextArrow: '<div class="slick-next"></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        arrows: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: false,
                    },
                },
            ],
        });
        $(".home-news-slider").slick({
            infinite: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="slick-prev"></div>',
            nextArrow: '<div class="slick-next"></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 992,
                    settings: "unslick",
                },
                {
                    breakpoint: 767,
                    settings: "unslick",
                },
            ],
        });
    };
    var renderSidebarHomepage = function () {
        $(".category-sidebar").clone().appendTo("#sidebar-landing").find("ul.list-style-1").removeClass("shadow-1").addClass("sidebar-list-home");
    };

    var sidebarControl = function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 640) {
                $(".sidebar-toggle-wrapper.is_sidebar_homepage").addClass("active");
            } else {
                $(".sidebar-toggle-wrapper.is_sidebar_homepage").removeClass("active");
            }
        });
    };

    var searchButton = function () {
        var lastScrollTop = 0;
        $(window).scroll(function () {
            if ($(window).width() < 992) {
                var st = $(this).scrollTop();
                if (st < 50) {
                    if(st < lastScrollTop) {
                        $(".search-toggle").addClass("active");
                        $(".search-toggle-landing").stop().slideDown();
                    }
                }
                else {
                    $(".search-toggle").removeClass("active");
                    $(".search-toggle-landing").stop().slideUp();
                }
                lastScrollTop = st;
            }
        });
        $(".search-toggle").click(function () {
            $(this).toggleClass("active");
            $(".search-toggle-landing").slideToggle();
        });
    };

    var numInputQuantity = function () {
        $(".input-number-wrapper").not(".disabled")
            .find(".sub")
            .click(function () {
                $(this)
                    .next("input")
                    .val(function (index, currentValue) {
                        if (parseInt(currentValue) > 0) {
                            return parseInt(currentValue) - 1;
                        } else return currentValue;
                    });
            });
        $(".input-number-wrapper").not(".disabled")
            .find(".plus")
            .click(function () {
                $(this)
                    .prev("input")
                    .val(function (index, currentValue) {
                        return parseInt(currentValue) + 1;
                    });
            });
    };

    var showMore = function() {
        $("a[data-toggle='show-more']").click(function(e){
            e.preventDefault();
            $(this).prev().removeClass("text-ellipsis, text-xs-ellipsis");
            $(this).remove();
        });
    }

    var maxHeight = function () {
        $(document).ready(function () {
            arr = [];
            rowEle = $(".js_row");
            rowEle.each(function () {
                var dataClass = $(this).attr('data-row');
                var newClass = 'js_row_' + dataClass;
                $(this).addClass(newClass);
            });

            var countRow = $('.js_max_data').attr("data-row");

            for(var i=1; i < countRow + 1; i++) {
                ar = [];
                $(".js_row_"+[i]).each(function () {
                    ar.push($(this).height());
                });

                $(".js_row_"+[i]).height(Math.max(...ar));
            }
        });
    };

    var scrollBar = function() {
        $('.overflow-scroll').scroll(function(){
                if($( window ).width() + $(this).scrollLeft() !== 456 ) {
                    $(this).find('*[data-toggle="dropdown"]').attr("aria-expanded","false");
                    $(this).find('.dropdown-box').removeClass("show");
                }
        })
    }

    var marginMain = function() {
       
        if($(window).width() <= 991){
            let height = $("header").not($(".d-none")[0]).outerHeight();
            console.log(height);
            $('main').css("margin-top",height + "px");
        }
        else{
            let height = $("header").outerHeight();
            $('main').css("margin-top",height + "px");
        }
    }

    var sidebarCategory =  function () {
        $('#filterMobile').click(function () {
            $('.filter-wrapper').addClass('open');
            $('.shadow-filter').addClass('open');
        });
        $(document).on("click","#closeFilter",function() {
            $('.filter-wrapper').removeClass('open');
            $('.shadow-filter').removeClass('open');
        });
    };

    var tableCart = function() {
        if($(".table-cart td").attr("colspan")) {
            console.log($(".table-cart td").attr("colspan"));
        }
    }

    sliderInit();
    renderSidebarHomepage();
    sidebarControl();
    searchButton();
    numInputQuantity();
    showMore();
    maxHeight();
    scrollBar();
    marginMain();
    sidebarCategory();
    tableCart();
});