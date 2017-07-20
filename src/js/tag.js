require('bootstrap');
require('../less/tag.less');

var common = require('./common');

$('.age-nav > li').on('click', function () {
    if ($(this).hasClass('active')) {
        return;
    }
    var ageIndex = $(this).index();

    var ageBtns = $(this).parent('.age-nav').find('li');
    ageBtns.removeClass('active');
    $(ageBtns[ageIndex]).addClass('active');

    var ageId = $(this).attr('age-Id');
    $('.line').hide();
    $('.' + ageId).show();

});

$('.gender-nav > li').on('click', function () {
    if ($(this).hasClass('active')) {
        return;
    }
    var genderIndex = $(this).index();

    var genderBtns = $(this).parent('.gender-nav').find('li');
    genderBtns.removeClass('active');
    $(genderBtns[genderIndex]).addClass('active');

    var genderId = $(this).attr('gender-Id');
    $('.fa-check').hide();
    $('.' + genderId).show();
});