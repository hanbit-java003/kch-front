$('.sub-menu > li').on('click', function () {

    if ($(this).hasClass('active')) {
        return;
    }
    var subNavIndex = $(this).index();

    var subNavBtns = $(this).parent('.sub-menu').find('li');
    subNavBtns.removeClass('active');
    $(subNavBtns[subNavIndex]).addClass('active');

    /*
    var subNavContents = $(this).parents('.sub-contents').find('section');
    subNavContents.removeClass('active');
    $(subNavContents[subNavIndex]).addClass('active');
    */

    var toonId = $(this).attr('toon-id');

    $('.sub-contents-toon').hide();
    $('.' + toonId).show();
});

