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
$("#cancelbooking").on("click", function () {
    $("#booking").removeClass("db");
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
        playPauseBtn4 = document.getElementById('playPause4'),
        play1btn = document.getElementById('play1'),
        play2btn = document.getElementById('play2'),
        play3btn = document.getElementById('play3'),
        play4btn = document.getElementById('play4');

    playPauseBtn1.addEventListener('click', function () {
        if (play1 == false) {
            play1btn.classList.remove('pause');
            play1btn.classList.add('play');
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
            play1btn.classList.remove('play');
            play1btn.classList.add('pause');
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
            play2btn.classList.remove('pause');
            play2btn.classList.add('play');
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
            play2btn.classList.remove('play');
            play2btn.classList.add('pause');
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
            play3btn.classList.remove('pause');
            play3btn.classList.add('play');
            play3 = true;
            console.log("play3 is " + play3);
            a4.pause();
            a2.pause();
            a1.pause();
            a3.play();
        } else {
            play3btn.classList.remove('play');
            play3btn.classList.add('pause');
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
            play4btn.classList.remove('pause');
            play4btn.classList.add('play');
            play4 = true;
            console.log("play4 is " + play4);
            a2.pause();
            a3.pause();
            a1.pause();
            a4.play();
        } else {
            play4btn.classList.remove('play');
            play4btn.classList.add('pause');
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
