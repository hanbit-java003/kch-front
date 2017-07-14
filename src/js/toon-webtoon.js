$('.sub-menu-daily-webtoon > li').on('click', function () {
    if ($(this).hasClass('active')) {
        return;
    }
    var subNavDailyIndex = $(this).index();

    var subNavDailyBtns = $(this).parent('.sub-menu-daily-webtoon').find('li');
    subNavDailyBtns.removeClass('active');
    $(subNavDailyBtns[subNavDailyIndex]).addClass('active');

    var dailyId = $(this).attr('daily-Id');

    $('.daily-webtoon').hide();
    $('.' + dailyId).show();
});

var toonWebtoonMon = require('./model/toon/webtoon/toon-webtoon-mon');
var toonWebtoonTue = require('./model/toon/webtoon/toon-webtoon-tue');
var toonWebtoonWed = require('./model/toon/webtoon/toon-webtoon-wed');
var toonWebtoonThur = require('./model/toon/webtoon/toon-webtoon-thur');
var toonWebtoonfri = require('./model/toon/webtoon/toon-webtoon-fri');
var toonWebtoonSat = require('./model/toon/webtoon/toon-webtoon-sat');
var toonWebtoonSun = require('./model/toon/webtoon/toon-webtoon-sun');

function initToonWebtoonMon(toonWebtoonMon) {
    $('.toon-webtoon-mon').empty();
    var template = require('../template/toon/toon-webtoon.hbs');

    for (var i=0; i<toonWebtoonMon.length; i++) {
        var html = template(toonWebtoonMon[i]);

        $('.toon-webtoon-mon').append(html);
    }
}

function initToonWebtoonTue(toonWebtoonTue) {
    $('.toon-webtoon-tue').empty();
    var template = require('../template/toon/toon-webtoon.hbs');

    for (var i=0; i<toonWebtoonTue.length; i++) {
        var html = template(toonWebtoonTue[i]);

        $('.toon-webtoon-tue').append(html);
    }
}

function initToonWebtoonWed(toonWebtoonWed) {
    $('.toon-webtoon-wed').empty();
    var template = require('../template/toon/toon-webtoon.hbs');

    for (var i=0; i<toonWebtoonWed.length; i++) {
        var html = template(toonWebtoonWed[i]);

        $('.toon-webtoon-wed').append(html);
    }
}

function initToonWebtoonThur(toonWebtoonThur) {
    $('.toon-webtoon-thur').empty();
    var template = require('../template/toon/toon-webtoon.hbs');

    for (var i=0; i<toonWebtoonThur.length; i++) {
        var html = template(toonWebtoonThur[i]);

        $('.toon-webtoon-thur').append(html);
    }
}

function iniToonWebtoonFri(toonWebtoonFri) {
    $('.toon-webtoon-fri').empty();
    var template = require('../template/toon/toon-webtoon.hbs');

    for (var i=0; i<toonWebtoonfri.length; i++) {
        var html = template(toonWebtoonfri[i]);

        $('.toon-webtoon-fri').append(html);
    }
}

function initToonWebtoonSat(toonWebtoonSat) {
    $('.toon-webtoon-sat').empty();
    var template = require('../template/toon/toon-webtoon.hbs');

    for (var i=0; i<toonWebtoonSat.length; i++) {
        var html = template(toonWebtoonSat[i]);

        $('.toon-webtoon-sat').append(html);
    }
}

function initToonWebtoonSun(toonWebtoonSun) {
    $('.toon-webtoon-sun').empty();
    var template = require('../template/toon/toon-webtoon.hbs');

    for (var i=0; i<toonWebtoonSun.length; i++) {
        var html = template(toonWebtoonSun[i]);

        $('.toon-webtoon-sun').append(html);
    }
}

initToonWebtoonMon(toonWebtoonMon);
initToonWebtoonTue(toonWebtoonTue);
initToonWebtoonWed(toonWebtoonWed);
initToonWebtoonThur(toonWebtoonThur);
iniToonWebtoonFri(toonWebtoonfri);
initToonWebtoonSat(toonWebtoonSat);
initToonWebtoonSun(toonWebtoonSun);