require('bootstrap');
require('../less/main.less');

var waitFreeToon = require('./model/waitfree-toon');

function initWaitFreeToon(waitFreeToon) {
    $('.waitfree-toon').empty();
    var template = require('../template/main/waitfree-toon.hbs');

    for (var i=0; i<waitFreeToon.length; i++) {
        var html = template(waitFreeToon[i]);

        $('.waitfree-toon').append(html);
    }
}

initWaitFreeToon(waitFreeToon);