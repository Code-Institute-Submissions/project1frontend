//carousel swipe left and right
$("#myCarousel").swipe({

    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll: "vertical"

});

//add active state to menu buttons
$(".masthead-nav li").on("click", function () {
    $(".masthead-nav li").removeClass("active");
    $(this).addClass("active");
});

//add open state to modal
$("#bookingmodal").on("click", function () {
    $("#booking").addClass("db");
});

//remove open state to modal
$("#submit").on("click", function () {
    $("#booking").removeClass("db");
});

//add open state to modal
$("#gallerymodal1").on("click", function () {
    $("#modalgallery1").addClass("db");
});

//remove open state to modal
$("#cancel1").on("click", function () {
    $("#modalgallery1").removeClass("db");
});
//add open state to modal
$("#gallerymodal2").on("click", function () {
    $("#modalgallery2").addClass("db");
});

//remove open state to modal
$("#cancel2").on("click", function () {
    $("#modalgallery2").removeClass("db");
});
//add open state to modal
$("#gallerymodal3").on("click", function () {
    $("#modalgallery3").addClass("db");
});

//remove open state to modal
$("#cancel3").on("click", function () {
    $("#modalgallery3").removeClass("db");
});
//add open state to modal
$("#gallerymodal4").on("click", function () {
    $("#modalgallery4").addClass("db");
});

//remove open state to modal
$("#cancel4").on("click", function () {
    $("#modalgallery4").removeClass("db");
});
//add open state to modal
$("#gallerymodal5").on("click", function () {
    $("#modalgallery5").addClass("db");
});

//remove open state to modal
$("#cancel5").on("click", function () {
    $("#modalgallery5").removeClass("db");
});
//add open state to modal
$("#gallerymodal6").on("click", function () {
    $("#modalgallery6").addClass("db");
});

//remove open state to modal
$("#cancel6").on("click", function () {
    $("#modalgallery6").removeClass("db");
});
//add open state to modal
$("#gallerymodal7").on("click", function () {
    $("#modalgallery7").addClass("db");
});

//remove open state to modal
$("#cancel7").on("click", function () {
    $("#modalgallery7").removeClass("db");
});
//add open state to modal
$("#gallerymodal8").on("click", function () {
    $("#modalgallery8").addClass("db");
});

//remove open state to modal
$("#cancel8").on("click", function () {
    $("#modalgallery8").removeClass("db");
});
//add open state to modal
$("#gallerymodal9").on("click", function () {
    $("#modalgallery9").addClass("db");
});

//remove open state to modal
$("#cancel9").on("click", function () {
    $("#modalgallery9").removeClass("db");
});
//add open state to modal
$("#gallerymodal10").on("click", function () {
    $("#modalgallery10").addClass("db");
});

//remove open state to modal
$("#cancel10").on("click", function () {
    $("#modalgallery10").removeClass("db");
});
//add open state to modal
$("#gallerymodal11").on("click", function () {
    $("#modalgallery11").addClass("db");
});

//remove open state to modal
$("#cancel11").on("click", function () {
    $("#modalgallery11").removeClass("db");
});

//add play functionality to the music play button
(function () {
    var play1 = false;
    var play2 = false;
    var play3 = false;
    var play4 = false;
    var a1 = document.getElementById('audio1'),
        a2 = document.getElementById('audio2'),
        a3 = document.getElementById('audio3'),
        a4 = document.getElementById('audio4'),
        playPauseBtn1 = document.getElementById('playPause1'),
        playPauseBtn2 = document.getElementById('playPause2'),
        playPauseBtn3 = document.getElementById('playPause3'),
        playPauseBtn4 = document.getElementById('playPause4');

    playPauseBtn1.addEventListener('click', function () {
        if (play1 == false) {
            this.classList.remove('pause');
            this.classList.add('play');
            play1 = true;
            play2 = false;
            play3 = false;
            play4 = false;
            console.log("play1 is " + play1);
            a4.pause();
            a3.pause();
            a2.pause();
            a1.play();
        } else {
            this.classList.remove('play');
            this.classList.add('pause');
            a1.pause();
            a2.pause();
            a2.load();
            a3.pause();
            a3.load();
            a4.pause();
            a4.load();
            play1 = false;
            console.log("play1 is " + play1);
        }
    }, false);
    
    playPauseBtn2.addEventListener('click', function () {
        if (play2 == false) {
            this.classList.remove('pause');
            this.classList.add('play');
            play2 = true;
            play1 = false;
            play3 = false;
            play4 = false;
            console.log("play2 is " + play2);
            a4.pause();
            a3.pause();
            a1.pause();
            a2.play();
        } else {
            this.classList.remove('play');
            this.classList.add('pause');
            a1.pause();
            a2.pause();
            a1.load();
            a3.pause();
            a3.load();
            a4.pause();
            a4.load();
            play2 = false;
            console.log("play2 is " + play2);
        }
    }, false);

    playPauseBtn3.addEventListener('click', function () {
        if (play3 == false) {
            this.classList.remove('pause');
            this.classList.add('play');
            play3 = true;
            console.log("play3 is " + play3);
            a4.pause();
            a2.pause();
            a1.pause();
            a3.play();
        } else {
            this.classList.remove('play');
            this.classList.add('pause');
            a1.pause();
            a2.pause();
            a2.load();
            a3.pause();
            a1.load();
            a4.pause();
            a4.load();
            play3 = false;
            console.log("play3 is " + play3);
        }
    }, false);

    playPauseBtn4.addEventListener('click', function () {
        if (play4 == false) {
            this.classList.remove('pause');
            this.classList.add('play');
            play4 = true;
            console.log("play4 is " + play4);
            a2.pause();
            a3.pause();
            a1.pause();
            a4.play();
        } else {
            this.classList.remove('play');
            this.classList.add('pause');
            a1.pause();
            a2.pause();
            a2.load();
            a3.pause();
            a3.load();
            a4.pause();
            a1.load();
            play4 = false;
            console.log("play4 is " + play4);
        }
    }, false);



})();
