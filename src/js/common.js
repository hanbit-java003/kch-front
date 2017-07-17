$('.header-logo').on('click', function () {
    location.href = './';
});

$('.header-nav > li').on('click', function () {

    var navId = $(this).attr('nav-id');

    location.href = './' + navId + '.html';
});

$('.header-nav > li').on('click', function () { // nav-button active

    if ($(this).hasClass('active')) {
        return;
    }
    var navIndex = $(this).index();

    var navBtns = $(this).parent('.header-nav').find('span');
    navBtns.removeClass('active');
    $(navBtns[navIndex]).addClass('active');

});

$('.header-account').on('click', function () { // side-bar
    $('body').append('<div class="darklayer"></div>'); // aside-account 가 나왔을 때 body 마우스 클릭 방지.
    $('body').css('overflow', 'hidden'); // 스크롤 없앰.

    var account = require('../template/aside-account.hbs');

    $('body').append(account);

    $('.account-sign-toggle').on('click', function () {
        $('.aside-sign-up').toggle();
        $('.aside-sign-in').toggle();
    });

    $('.aside-account').animate({
        right: '0'
    }, {
        duration: 500,
        complete: function() {
            $('.darklayer').on('click', function () {
                $('.aside-account').animate({
                    right: '-400px'
               }, {
                    duration: 500,
                    complete: function () {
                        $('.aside-account').remove();
                        $('.darklayer').remove();
                        $('body').css('overflow', 'auto');
                    }
               })
            });
        }
    });
});