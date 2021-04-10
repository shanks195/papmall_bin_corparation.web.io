$(function ($) {
    var menunavigation = function () {
        $(window).on('load scroll resize', function (e) {
            var mainHeight = $('main').outerHeight();
            if ($(window).scrollTop() > 34 && mainHeight > 1000) {
                $('.scroll-wrapper').addClass('scroll-fixed');
            } else {
                $('.scroll-wrapper').removeClass('scroll-fixed');
            }
        });
    };

    var menumobileclick = function () {
        $('.mobile-menu-toggle').on("click", function () {
            $('#menuDesktop').addClass('open');
        });
        $('.menu-cancel').on("click", function () {
            $('#menuDesktop').removeClass('open');
        });
    };
    var opensearchblock = function () {
        $('#searchMobileBtn').on("click", function () {
            $('.search-mobile-block').removeClass('hidden');
        });
        $('#search_mobile_back').on("click", function () {
            $('.search-mobile-block').addClass('hidden');
        });
    };
    var openadminpanel = function () {
        $('#bottom_button').on("click", function () {
            $('#bottom_button').addClass('bottom-button-disabled');
        });
        $('#bottom_button').on("click", function () {
            $('#bottom_panel_admin').removeClass('bottom-panel-disabled');
        });
        $('.close-bottom-panel').on("click", function () {
            $('#bottom_panel_admin').addClass('bottom-panel-disabled');
            $('#bottom_button').removeClass('bottom-button-disabled');
        });
    };
    var sidebarSearch =  function () {
        $('.action-toogle-sidebar-search').click(function () {
            $(this).parents('.sidebar-search').toggleClass('open');
            var open = $(this).parents('.sidebar-search').hasClass('open');
            if(open) {
                $(this).find('i').attr({
                    class: $(this).find('i').attr('data-icon-open')
                })
            } else {
                $(this).find('i').attr({
                    class: $(this).find('i').attr('data-icon-close')
                })
            }

        });
    };
    var sidebarCategory =  function () {
        $('.sidebar-toggle').click(function () {
            $(this).parents('.sidebar').toggleClass('open');
        });
    };
    let toogleStyle = function() {
        $(".toggle-btn .value").click(function() {
            let mainParent = $(this).parent(".toggle-btn");
            if ($(mainParent).find("input.value").is(":checked")) {
                console.log('12');
                $(mainParent).addClass("active");
            } else {
                console.log('34');
                $(mainParent).removeClass("active");
            }
        });

    };
    let showHidePassword = function() {
        $('.password-field').each(function(index) {
            var btn = $(this).find('button');
            var input = $(this).find('input');
            btn.click(function() {
                if (input.prop('type') == 'password') {
                    input.attr('type', 'text');
                    $(this).find('img').attr({
                        src: $(this).find('img').attr('data-icon-show')
                    });
                } else {
                    input.attr('type', 'password');
                    $(this).find('img').attr({
                        src: $(this).find('img').attr('data-icon-hide')
                    });
                }
            })
        });
    }

    let inputCount = function () {
        $('.input-amount').each(function () {
            let inputNumber = $(this).find('input');
            let decrementButton = $(this).find('.decrement');
            let incrementButton = $(this).find('.increment');
            function disableButtonStyle() {
                if(+inputNumber.val() == 0) {
                    decrementButton.attr('disabled', 'disabled');
                } else {
                    decrementButton.removeAttr('disabled');
                }
            }
            decrementButton.click(function () {
                if(+inputNumber.val() > 0) {
                    inputNumber.val(+inputNumber.val() - 1);
                }
                disableButtonStyle();
            })
            incrementButton.click(function () {
                inputNumber.val(+inputNumber.val() + 1);
                disableButtonStyle();
            })
        });
    }

    $(function () {
        menunavigation();
        menumobileclick();
        opensearchblock();
        openadminpanel();
        sidebarSearch();
        toogleStyle();
        showHidePassword();
        inputCount();
        sidebarCategory();
    });
});