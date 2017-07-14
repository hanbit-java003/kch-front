$('.sub-menu-day-webtoon > li').on('click', function () {
    if ($(this).hasClass('active')) {
        return;
    }
    var subNavDayIndex = $(this).index();

    var subNavDayBtns = $(this).parent('.sub-menu-day-webtoon').find('li');
    subNavDayBtns.removeClass('active');
    $(subNavDayBtns[subNavDayIndex]).addClass('active');
});

var toonWebtoonMon = require('./model/toon/webtoon/toon-webtoon-mon');
var toonWebtoonTue = require('./model/toon/webtoon/toon-webtoon-tue');

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

initToonWebtoonMon(toonWebtoonMon);
initToonWebtoonTue(toonWebtoonTue);