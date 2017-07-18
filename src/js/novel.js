require('bootstrap');
require('../less/novel.less');

var common = require('./common');
var subTab = require('./sub-tab');
var webnovel = require('./novel-webnovel');

var novelWaitfree = require('./model/novel/novel-waitfree');
var novelFantasy = require('./model/novel/novel-fantasy');
var novelHeroism = require('./model/novel/novel-heroism');
var novelRomance = require('./model/novel/novel-romance');
var novelRoFan = require('./model/novel/novel-ro-fan');

function initNovelWaitfree(novelWaitfree) {
    $('.novel-waitfree').empty();
    var template = require('../template/main/waitfree.hbs');

    for (var i=0; i<novelWaitfree.length; i++) {
        var html = template(novelWaitfree[i]);

        $('.novel-waitfree').append(html);
    }
}

function initNovelFantasy(novelFantasy) {
    $('.novel-fantasy').empty();
    var template = require('../template/main/novel.hbs');

    for (var i=0; i<novelFantasy.length; i++) {
        var html = template(novelFantasy[i]);

        $('.novel-fantasy').append(html);
    }
}

function initNovelHeroism(novelHeroism) {
    $('.novel-heroism').empty();
    var template = require('../template/main/novel.hbs');

    for (var i=0; i<novelHeroism.length; i++) {
        var html = template(novelHeroism[i]);

        $('.novel-heroism').append(html);
    }
}

function initNovelRomance(novelRomance) {
    $('.novel-romance').empty();
    var template = require('../template/main/novel.hbs');

    for (var i=0; i<novelRomance.length; i++) {
        var html = template(novelRomance[i]);

        $('.novel-romance').append(html);
    }
}

function initNovelRoFan(novelRoFan) {
    $('.novel-ro-fan').empty();
    var template = require('../template/main/novel.hbs');

    for (var i=0; i<novelRoFan.length; i++) {
        var html = template(novelRoFan[i]);

        $('.novel-ro-fan').append(html);
    }
}

initNovelWaitfree(novelWaitfree);
initNovelFantasy(novelFantasy);
initNovelHeroism(novelHeroism);
initNovelRomance(novelRomance);
initNovelRoFan(novelRoFan);