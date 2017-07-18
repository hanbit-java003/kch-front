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

    var id = $(this).attr('id');

    $('.sub-contents-toon').hide();
    $('.' + id).show();

    $('.sub-contents-novel').hide();
    $('.' + id).show();

});


