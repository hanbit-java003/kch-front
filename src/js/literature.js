require('bootstrap');
require('../less/literature.less');

var common = require('./common');
var subTab = require('./sub-tab');

var literatureWaitfree = require('./model/literature/literature-waitfree');
var literatureLiterature = require('./model/literature/literature-literature');
var literatureUtility = require('./model/literature/literature-utility');
var literatureLearning = require('./model/literature/literature-learning');
var literatureClassic = require('./model/literature/literature-classic');

function initLiteratureWaitfree(literatureWaitfree) {
    $('.literature-waitfree').empty();
    var template = require('../template/main/waitfree.hbs');

    for (var i=0; i<literatureWaitfree.length; i++) {
        var html = template(literatureWaitfree[i]);

        $('.literature-waitfree').append(html);
    }
}

function initLiteratureLiterature(literatureLiterature) {
    $('.literature-literature').empty();
    var template = require('../template/main/literature.hbs');

    for (var i=0; i<literatureLiterature.length; i++) {
        var html = template(literatureLiterature[i]);

        $('.literature-literature').append(html);
    }
}

function initLiteratureUtility(literatureUtility) {
    $('.literature-utility').empty();
    var template = require('../template/main/literature.hbs');

    for (var i=0; i<literatureUtility.length; i++) {
        var html = template(literatureUtility[i]);

        $('.literature-utility').append(html);
    }
}

function initLiteratureLearning(literatureLearning) {
    $('.literature-learning').empty();
    var template = require('../template/main/literature.hbs');

    for (var i=0; i<literatureLearning.length; i++) {
        var html = template(literatureLearning[i]);

        $('.literature-learning').append(html);
    }
}

function initLiteratureClassic(literatureClassic) {
    $('.literature-classic').empty();
    var template = require('../template/main/literature.hbs');

    for (var i=0; i<literatureClassic.length; i++) {
        var html = template(literatureClassic[i]);

        $('.literature-classic').append(html);
    }
}

initLiteratureWaitfree(literatureWaitfree);
initLiteratureLiterature(literatureLiterature);
initLiteratureUtility(literatureUtility);
initLiteratureLearning(literatureLearning);
initLiteratureClassic(literatureClassic);