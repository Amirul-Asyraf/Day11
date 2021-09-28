var sliderHolder = document.getElementById('slider-holder');
var pos = 0;

// carousel();

// function carousel() {
//     pos -= 100;

//     if (pos < -300) {
//         pos = 0;
//     } else if (pos > 0) {
//         pos = -300;
//     }
//     sliderHolder.style.transform = `translateX(${pos}vw)`;
//     setTimeout(carousel, 2000);
// }

function moveSlider(posNum) {
    pos += posNum;

    if (pos < -300) {
        pos = 0;
    } else if (pos > 0) {
        pos = -300;
    }
    sliderHolder.style.transform = `translateX(${pos}vw)`;
}

var sliderTimer = null; 
sliderTimerID = setInterval(sliderTimer, 2000);

function sliderTimer() {
    pos -= 100;

    if (pos < -300) {
        pos = 0;
    }
    sliderHolder.style.transform = `translateX(${pos}vw)`;
}

function stopTimer () {
    clearInterval(sliderTimerID);
}

function resumeTimer() {
    sliderTimerID = setInterval(sliderTimer, 2000);
}