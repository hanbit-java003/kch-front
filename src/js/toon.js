require('bootstrap');
require('../less/toon.less');

var common = require('./common');

$('')

$('.sub-menu > li').on('click', function () {

    if ($(this).hasClass('active')) {
       return;
    }
    var subNavIndex = $(this).index();

    var subNavBtns = $(this).parent('.sub-menu').find('li');
    subNavBtns.removeClass('active');
    $(subNavBtns[subNavIndex]).addClass('active');

});

var toonWaitFree =  require('./model/toon/toon-waitfree');

function initToonWaitFree(toonWaitFree) {
    $('.toon-waitfree').empty();
    var template = require('../template/toon/toon-waitfree.hbs');

    for (var i=0; i<toonWaitFree.length; i++) {
        var html = template(toonWaitFree[i]);

        $('.toon-waitfree').append(html);
    }
}

initToonWaitFree(toonWaitFree);
