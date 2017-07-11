$('.header-account').on('click', function () {
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
