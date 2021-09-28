var keys = document.querySelectorAll('.key');

var sng1 = document.getElementById('sng1');
var sng2 = document.getElementById('sng2');
var sng3 = document.getElementById('sng3');
var sng4 = document.getElementById('sng4');
var sng5 = document.getElementById('sng5');
var sng6 = document.getElementById('sng6');
var sng7 = document.getElementById('sng7');
var sng8 = document.getElementById('sng8');
var sng9 = document.getElementById('sng9');
var sng10 = document.getElementById('snd');

var keyList = [];

var keyID = null;

window.addEventListener('keydown', keyPressed);
window.addEventListener('keyup', keyReleased);

function keyPressed(evt) {
    keyList[evt.keyCode] = true;

    if (keyList[65]) {
        sng1.play();
        keys[0].classList.add('active');
        keyID = keys[0];
    }

    if (keyList[83]) {
        sng2.play();
        keys[2].classList.add('active');
        keyID = keys[2];
    }

    if (keyList[68]) {
        sng3.play();
        keys[4].classList.add('active');
        keyID = keys[4];
    }

    if (keyList[70]) {
        sng4.play();
        keys[5].classList.add('active');
        keyID = keys[5];
    }

    if (keyList[71]) {
        sng5.play();
        keys[7].classList.add('active');
        keyID = keys[7];
    }

    if (keyList[72]) {
        sng6.play();
        keys[9].classList.add('active');
        keyID = keys[9];
    }

    if (keyList[74]) {
        sng7.play();
        keys[11].classList.add('active');
        keyID = keys[11];
    }

    if (keyList[75]) {
        sng8.play();
        keys[12].classList.add('active');
        keyID = keys[12];
    }

    if (keyList[76]) {
        sng9.play();
        keys[14].classList.add('active');
        keyID = keys[14];
    }

    if (keyList[87]  || keyList[69] || keyList[84] || keyList[89] || keyList[85] || keyList[79]) {
        sng10.play();
    }
}

function keyReleased(evt) {
    removeClass(keyID);
    delete keyList[evt.keyCode];
}

function removeClass (kID) {
    kID.classList.remove('active');
}
