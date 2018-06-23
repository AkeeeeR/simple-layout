$(document).ready(function () {
    var NavY = $('.navbar').offset().top;

    var stickyNav = function () {
        var ScrollY = $(window).scrollTop();

        if (ScrollY > $('#slider').height()) {
            $('#top').addClass('sticky');
        } else {
            $('#top').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });


    $("#photos1").hover(function () {
        $('#addphoto1').addClass('addphoto-wrapper');
        $('#photos1 span').removeClass('hidden');
    }, function () {
        $('#addphoto1').removeClass('addphoto-wrapper');
        $('#photos1 span').addClass('hidden');
    });

    $("#photos2").hover(function () {
        $('#addphoto2').addClass('addphoto-wrapper');
        $('#photos2 span').removeClass('hidden');
    }, function () {
        $('#addphoto2').removeClass('addphoto-wrapper');
        $('#photos2 span').addClass('hidden');
    });

    $("#photos3").hover(function () {
        $('#addphoto3').addClass('addphoto-wrapper');
        $('#photos3 span').removeClass('hidden');
    }, function () {
        $('#addphoto3').removeClass('addphoto-wrapper');
        $('#photos3 span').addClass('hidden');
    });

    $("#photos4").hover(function () {
        $('#addphoto4').addClass('addphoto-wrapper');
        $('#photos4 span').removeClass('hidden');
    }, function () {
        $('#addphoto4').removeClass('addphoto-wrapper');
        $('#photos4 span').addClass('hidden');
    });
});


function changebox(boxNumber) {
    if (boxNumber === 1) {
        $('#inside-box1').removeClass('hidden');
        $('#inside-box2').addClass('hidden');
        $('#inside-box3').addClass('hidden');
        $('#inside-box4').addClass('hidden');
    } else if (boxNumber === 2) {
        $('#inside-box1').addClass('hidden');
        $('#inside-box2').removeClass('hidden');
        $('#inside-box3').addClass('hidden');
        $('#inside-box4').addClass('hidden');
    } else if (boxNumber === 3) {
        $('#inside-box1').addClass('hidden');
        $('#inside-box2').addClass('hidden');
        $('#inside-box3').removeClass('hidden');
        $('#inside-box4').addClass('hidden');
    } else if (boxNumber === 4) {
        $('#inside-box1').addClass('hidden');
        $('#inside-box2').addClass('hidden');
        $('#inside-box3').addClass('hidden');
        $('#inside-box4').removeClass('hidden');
    }
}