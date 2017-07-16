require('bootstrap');
require('../less/main.less');

var common = require('./common');

var waitFreeToon = require('./model/waitfree-toon');
var bestToon = require('./model/best-toon');
var waitFreeNovel = require('./model/waitfree-novel');
var bestNovel = require('./model/best-novel');

function initWaitFreeToon(waitFreeToon) {
    $('.waitfree-toon').empty();
    var template = require('../template/main/waitfree-toon.hbs');

    for (var i=0; i<waitFreeToon.length; i++) {
        var html = template(waitFreeToon[i]);

        $('.waitfree-toon').append(html);
    }
}

function initBestToon(bestToon) {
    $('.best-toon').empty();
    var template = require('../template/main/best-toon.hbs');

    for (var i=0; i<bestToon.length; i++) {
        var html = template(bestToon[i]);

        $('.best-toon').append(html);
    }
}

function initWaitFreeNovel(waitFreeNovel) {
    $('.waitfree-novel').empty();
    var template = require('../template/main/waitfree-novel.hbs');

    for (i=0; i<waitFreeNovel.length; i++) {
        var html = template(waitFreeNovel[i]);

        $('.waitfree-novel').append(html);
    }
}

function initBestNovel(bestNovel) {
    $('.best-novel').empty();
    var template = require('../template/main/best-novel.hbs');

    for (i=0; i<bestNovel.length; i++) {
        var html = template(bestNovel[i]);

        $('.best-novel').append(html);
    }
}

initWaitFreeToon(waitFreeToon);
initBestToon(bestToon);
initWaitFreeNovel(waitFreeNovel);
initBestNovel(bestNovel);