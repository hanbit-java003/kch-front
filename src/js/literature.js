require('bootstrap');
require('../less/literature.less');

var common = require('./common');
var subTab = require('./sub-tab');

var literatureWaitfree = require('./model/literature/literature-waitfree');

function initLiteratureWaitfree(literatureWaitfree) {
    $('.literature-waitfree').empty();
    var template = require('../template/main/waitfree.hbs');

    for (var i=0; i<literatureWaitfree.length; i++) {
        var html = template(literatureWaitfree[i]);

        $('.literature-waitfree').append(html);
    }
}

initLiteratureWaitfree(literatureWaitfree);