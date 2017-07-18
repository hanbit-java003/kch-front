require('bootstrap');
require('../less/novel.less');

var common = require('./common');
var subTab = require('./sub-tab');
var webnovel = require('./novel-webnovel');

var novelWaitfree = require('./model/novel/novel-waitfree');

function initNovelWaitfree(novelWaitfree) {
    $('.novel-waitfree').empty();
    var template = require('../template/main/waitfree.hbs');

    for (var i=0; i<novelWaitfree.length; i++) {
        var html = template(novelWaitfree[i]);

        $('.novel-waitfree').append(html);
    }
}

initNovelWaitfree(novelWaitfree);