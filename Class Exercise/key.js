var boxy = document.getElementById('boxy');
var snd1 = document.getElementById('snd1');
var snd2 = document.getElementById('snd2');
var snd3 = document.getElementById('snd3');
var snd4 = document.getElementById('snd4');
var snd5 = document.getElementById('snd5');

var boxyPos = {x: 0, y: 0};
var keyList = [];

window.addEventListener('keydown', keyPressed);
window.addEventListener('keyup', keyReleased);

function keyPressed(evt) {
    // console.log(evt);
    //push the keycode into array
    keyList[evt.keyCode] = true;
    // console.log(keyList);

    if (keyList[39]) {
        console.log('go right');
        boxyPos.x += 10;
    }

    if (keyList[37]) {
        console.log('go left');
        boxyPos.x -=10;
    }

    if (keyList[38]) {
        console.log('go up');
        boxyPos.y -= 10;
    }

    if (keyList[40]) {
        console.log('go down');
        boxyPos.y += 10;
    }

    // switch(evt.keyCode) {
    //     case 39:
    //         console.log('go right');
    //         boxyPos.x += 5;
    //         break;

    //     case 37:
    //         console.log('go left');
    //         boxyPos.x -=5;
    //         break;

    //     case 38:
    //         console.log('go up');
    //         boxyPos.y -= 5;
    //         break;

    //     case 40:
    //         console.log('go down');
    //         boxyPos.y += 5;
    //         break;

    //     default:
    //         break;
    // }

    boxy.style.left = boxyPos.x + "px";
    boxy.style.top = boxyPos.y + "px";
}

function keyReleased(evt) {
    delete keyList[evt.keyCode];
}