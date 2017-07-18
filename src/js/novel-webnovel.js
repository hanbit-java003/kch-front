$('.sub-menu-daily-webnovel > li').on('click', function () {
    if ($(this).hasClass('active')) {
        return;
    }
    var subNavDailyIndex = $(this).index();

    var subNavDailyBtns = $(this).parent('.sub-menu-daily-webnovel').find('li');
    subNavDailyBtns.removeClass('active');
    $(subNavDailyBtns[subNavDailyIndex]).addClass('active');

    var dailyId = $(this).attr('daily-Id');

    $('.daily-webnovel').hide();
    $('.' + dailyId).show();
});

var novelWebnovelMon = require('./model/novel/webnovel/novel-webnovel-mon');
var novelWebnovelTue = require('./model/novel/webnovel/novel-webnovel-tue');
var novelWebnovelWed = require('./model/novel/webnovel/novel-webnovel-wed');
var novelWebnovelThur = require('./model/novel/webnovel/novel-webnovel-thur');
var novelWebnovelFri = require('./model/novel/webnovel/novel-webnovel-fri');
var novelWebnovelSat = require('./model/novel/webnovel/novel-webnovel-sat');
var novelWebnovelSun = require('./model/novel/webnovel/novel-webnovel-sun');

function initNovelWebnovelMon(novelWebnovelMon) {
    $('.novel-webnovel-mon').empty();
    var template = require('../template/main/novel.hbs');

    for (var i=0; i<novelWebnovelMon.length; i++) {
        var html = template(novelWebnovelMon[i]);

        $('.novel-webnovel-mon').append(html);
    }
}

function initNovelWebnovelTue(novelWebnovelTue) {
    $('.novel-webnovel-tue').empty();
    var template = require('../template/main/novel.hbs');

    for (var i=0; i<novelWebnovelTue.length; i++) {
        var html = template(novelWebnovelTue[i]);

        $('.novel-webnovel-tue').append(html);
    }
}

function initNovelWebnovelWed(novelWebnovelWed) {
    $('.novel-webnovel-wed').empty();
    var template = require('../template/main/novel.hbs');

    for (var i=0; i<novelWebnovelWed.length; i++) {
        var html = template(novelWebnovelWed[i]);

        $('.novel-webnovel-wed').append(html);
    }
}

function initNovelWebnovelThur(novelWebnovelThur) {
    $('.novel-webnovel-thur').empty();
    var template = require('../template/main/novel.hbs');

    for (var i=0; i<novelWebnovelThur.length; i++) {
        var html = template(novelWebnovelThur[i]);

        $('.novel-webnovel-thur').append(html);
    }
}

function initNovelWebnovelFri(novelWebnovelFri) {
    $('.novel-webnovel-fri').empty();
    var template = require('../template/main/novel.hbs');

    for (var i=0; i<novelWebnovelFri.length; i++) {
        var html = template(novelWebnovelFri[i]);

        $('.novel-webnovel-fri').append(html);
    }
}

function initNovelWebnovelSat(novelWebnovelSat) {
    $('.novel-webnovel-sat').empty();
    var template = require('../template/main/novel.hbs');

    for (var i=0; i<novelWebnovelSat.length; i++) {
        var html = template(novelWebnovelSat[i]);

        $('.novel-webnovel-sat').append(html);
    }
}

function initNovelWebnovelSun(novelWebnovelSun) {
    $('.novel-webnovel-sun').empty();
    var template = require('../template/main/novel.hbs');

    for (var i=0; i<novelWebnovelSun.length; i++) {
        var html = template(novelWebnovelSun[i]);

        $('.novel-webnovel-sun').append(html);
    }
}

initNovelWebnovelMon(novelWebnovelMon);
initNovelWebnovelTue(novelWebnovelTue);
initNovelWebnovelWed(novelWebnovelWed);
initNovelWebnovelThur(novelWebnovelThur);
initNovelWebnovelFri(novelWebnovelFri);
initNovelWebnovelSat(novelWebnovelSat);
initNovelWebnovelSun(novelWebnovelSun);