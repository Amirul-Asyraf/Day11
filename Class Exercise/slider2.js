//target slider-holder
var sliderHolder = document.getElementById('slider-holder');
var pos = 0;

var sliderList = [
    {
        title: 'Rome',
        subTitle: 'Colosseum',
        bgImg: 'url(./images/rome.jpg)',
    },

    {
        title: 'Strong Winds',
        subTitle: 'and perseverance ..',
        bgImg: 'url(./images/tree.jpg)',
    },

    {
        title: 'Mountains',
        subTitle: 'and more mountains ..',
        bgImg: 'url(./images/mountain.jpg)',
    },

    {
        title: 'Nature',
        subTitle: 'is healing ..',
        bgImg: 'url(./images/lake.jpg)',
    }
];

sliderHolder.style.width = sliderList.length * 100 + 'vw';
for (var i = 0; i < sliderList.length; i++) {

    var createSliderEle = document.createElement('div');

    var createSliderH1 = document.createElement('h1');
    createSliderH1.innerHTML = sliderList[i].title;

    var createSliderP = document.createElement('p');
    createSliderP.innerHTML = sliderList[i].subTitle;

    createSliderEle.classList.add('slider');
    createSliderEle.appendChild(createSliderH1);
    createSliderEle.appendChild(createSliderP);

    createSliderEle.style.backgroundImage = sliderList[i].bgImg;

    sliderHolder.appendChild(createSliderEle);
}

function moveSlider(posNum) {
    pos += posNum;

    if (pos < -300) {
        pos = 0;
    } else if (pos > 0) {
        pos = -300;
    }
    sliderHolder.style.transform = `translateX(${pos}vw)`;
}