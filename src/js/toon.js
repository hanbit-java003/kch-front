require('bootstrap');
require('../less/toon.less');

var common = require('./common');

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
var toonRomance = require('./model/toon/toon-romance');
var toonWebtoonMon = require('./model/toon/toon-webtoon-mon');

function initToonWaitFree(toonWaitFree) {
    $('.toon-waitfree').empty();
    var template = require('../template/toon/toon-waitfree.hbs');

    for (var i=0; i<toonWaitFree.length; i++) {
        var html = template(toonWaitFree[i]);

        $('.toon-waitfree').append(html);
    }
}

function initToonRomance(toonRomance) {
    $('.toon-romance').empty();
    var template = require('../template/toon/toon-romance.hbs');

    for (var i=0; i<toonRomance.length; i++) {
        var html = template(toonRomance[i]);

        $('.toon-romance').append(html);
    }
}

function initToonWebtoonMon(toonWebtoonMon) {
    $('.toon-webtoon-mon').empty();
    var template = require('../template/toon/toon-webtoon-mon.hbs');

    for (var i=0; i<toonWebtoonMon.length; i++) {
        var html = template(toonWebtoonMon[i]);

        $('.toon-webtoon-mon').append(html);
    }
}

initToonWaitFree(toonWaitFree);
initToonRomance(toonRomance);
initToonWebtoonMon(toonWebtoonMon);

$('.sub-menu-day-webtoon > li').on('click', function () {
    if ($(this).hasClass('active')) {
        return;
    }
    var subNavDayIndex = $(this).index();

    var subNavDayBtns = $(this).parent('.sub-menu-day-webtoon').find('li');
    subNavDayBtns.removeClass('active');
    $(subNavDayBtns[subNavDayIndex]).addClass('active');
});