var novelWebnovelMon = require('./model/novel/webnovel/novel-webnovel-mon');
var novelWebnovelTue = require('./model/novel/webnovel/novel-webnovel-tue');
var novelWebnovelWed = require('./model/novel/webnovel/novel-webnovel-wed');

function initNovelWebnovelMon(novelWebnovelMon) {
    $('.novel-webnovel-mon').empty();
    var template = require('../template/novel/novel-webnovel.hbs');

    for (var i=0; i<novelWebnovelMon.length; i++) {
        var html = template(novelWebnovelMon[i]);

        $('.novel-webnovel-mon').append(html);
    }
}

function initNovelWebnovelTue(novelWebnovelTue) {
    $('.novel-webnovel-tue').empty();
    var template = require('../template/novel/novel-webnovel.hbs');

    for (var i=0; i<novelWebnovelTue.length; i++) {
        var html = template(novelWebnovelTue[i]);

        $('.novel-webnovel-tue').append(html);
    }
}

function initNovelWebnovelWed(novelWebnovelWed) {
    $('.novel-webnovel-wed').empty()
    var template = require('../template/novel/novel-webnovel.hbs');

    for (var i=0; i<novelWebnovelWed.length; i++) {
        var html = template(novelWebnovelWed[i]);

        $('.novel-webnovel-wed').append(html);
    }
}

initNovelWebnovelMon(novelWebnovelMon);
initNovelWebnovelTue(novelWebnovelTue);
initNovelWebnovelWed(novelWebnovelWed);