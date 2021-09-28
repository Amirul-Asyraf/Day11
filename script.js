var keys = document.querySelectorAll('.key');

// var sng1 = document.getElementById('sng1');
// var sng2 = document.getElementById('sng2');
// var sng3 = document.getElementById('sng3');
// var sng4 = document.getElementById('sng4');
// var sng5 = document.getElementById('sng5');
// var sng6 = document.getElementById('sng6');
// var sng7 = document.getElementById('sng7');
// var sng8 = document.getElementById('sng8');
// var sng9 = document.getElementById('sng9');
// var sng10 = document.getElementById('snd');

var keyList = [];

var keyID = null;

var soundList = {
    snd1: new Howl({src:['audio/1.mp3']}),  
    snd2: new Howl({src:['audio/2.mp3']}),
    snd3: new Howl({src:['audio/3.mp3']}),
    snd4: new Howl({src:['audio/4.mp3']}),  
    snd5: new Howl({src:['audio/5.mp3']}),
    snd6: new Howl({src:['audio/6.mp3']}),
    snd7: new Howl({src:['audio/7.mp3']}),  
    snd8: new Howl({src:['audio/8.mp3']}),
    snd9: new Howl({src:['audio/9.mp3']}),
    snd10: new Howl({src:['audio/laser.mp3']}),  
}

window.addEventListener('keydown', keyPressed);
window.addEventListener('keyup', keyReleased);

function keyPressed(evt) {
    keyList[evt.keyCode] = true;

    if (keyList[65]) {
        soundList.snd1.play();
        keys[0].classList.add('active');
        keyID = keys[0];
    }

    if (keyList[83]) {
        soundList.snd2.play();
        keys[2].classList.add('active');
        keyID = keys[2];
    }

    if (keyList[68]) {
        soundList.snd3.play();
        keys[4].classList.add('active');
        keyID = keys[4];
    }

    if (keyList[70]) {
        soundList.snd4.play();
        keys[5].classList.add('active');
        keyID = keys[5];
    }

    if (keyList[71]) {
        soundList.snd5.play();
        keys[7].classList.add('active');
        keyID = keys[7];
    }

    if (keyList[72]) {
        soundList.snd6.play();
        keys[9].classList.add('active');
        keyID = keys[9];
    }

    if (keyList[74]) {
        soundList.snd7.play();
        keys[11].classList.add('active');
        keyID = keys[11];
    }

    if (keyList[75]) {
        soundList.snd8.play();
        keys[12].classList.add('active');
        keyID = keys[12];
    }

    if (keyList[76]) {
        soundList.snd9.play();
        keys[14].classList.add('active');
        keyID = keys[14];
    }

    if (keyList[87]  || keyList[69] || keyList[84] || keyList[89] || keyList[85] || keyList[79]) {
        soundList.snd10.play();
        console.log('laser playing')
    }
}

function keyReleased(evt) {
    removeClass(keyID);
    delete keyList[evt.keyCode];
}

function removeClass (kID) {
    kID.classList.remove('active');
}
