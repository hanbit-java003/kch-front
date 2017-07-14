require('bootstrap');
require('../less/toon.less');

var common = require('./common');
var subTab = require('./sub-tab');

var toonWebtoonMon = require('./model/toon/toon-webtoon-mon');
var toonWaitFree =  require('./model/toon/toon-waitfree');
var toonRomance = require('./model/toon/toon-romance');
var toonBoy = require('./model/toon/toon-boy');
var toonDrama = require('./model/toon/toon-drama');
var toonAction = require('./model/toon/toon-action');

function initToonWebtoonMon(toonWebtoonMon) {
    $('.toon-webtoon-mon').empty();
    var template = require('../template/toon/toon-webtoon-mon.hbs');

    for (var i=0; i<toonWebtoonMon.length; i++) {
        var html = template(toonWebtoonMon[i]);

        $('.toon-webtoon-mon').append(html);
    }
}

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

function initToonBoy(toonBoy) {
    $('.toon-boy').empty();
    var template = require('../template/toon/toon-boy.hbs');

    for (var i=0; i<toonBoy.length; i++) {
        var html = template(toonBoy[i]);

        $('.toon-boy').append(html);
    }
}

function initToonDrama(toonDrama) {
    $('.toon-drama').empty();
    var template = require('../template/toon/toon-drama.hbs');

    for (var i=0; i<toonDrama.length; i++) {
        var html = template(toonDrama[i]);

        $('.toon-drama').append(html);
    }
}

function initToonAction(toonAction) {
    $('.toon-action').empty();
    var template = require('../template/toon/toon-action.hbs');

    for (var i=0; i<toonAction.length; i++) {
        var html = template(toonAction[i]);

        $('.toon-action').append(html);
    }
}

initToonWebtoonMon(toonWebtoonMon);
initToonWaitFree(toonWaitFree);
initToonRomance(toonRomance);
initToonBoy(toonBoy);
initToonDrama(toonDrama);
initToonAction(toonAction);

$('.sub-menu-day-webtoon > li').on('click', function () {
    if ($(this).hasClass('active')) {
        return;
    }
    var subNavDayIndex = $(this).index();

    var subNavDayBtns = $(this).parent('.sub-menu-day-webtoon').find('li');
    subNavDayBtns.removeClass('active');
    $(subNavDayBtns[subNavDayIndex]).addClass('active');
});