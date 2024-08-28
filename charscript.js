let nextButton = document.getElementById('right');
let prevButton = document.getElementById('left');
let backButton = document.getElementById('back');
let MIButton = document.querySelectorAll('.moreinfo');
let content = document.querySelector('.content');
let listA = document.querySelector('.content .list');

nextButton.onclick = function(){
    showSlider('next');
}

prevButton.onclick = function(){
    showSlider('prev');
}

let doNotClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents='none';
    prevButton.style.pointerEvents='none';
    content.classList.remove('prev','next');
    let character = document.querySelectorAll('.content .list .character');
    if(type=='next'){
        listA.appendChild(character[0]);
        content.classList.add('next');
    }
    else{
        let positionLast = character.length -1;
        listA.prepend(character[positionLast]);
        content.classList.add('prev');
    }

    clearTimeout(doNotClick);
    doNotClick = setTimeout(() => {
        nextButton.style.pointerEvents='auto';
        prevButton.style.pointerEvents='auto';
    }, 1000);

}

MIButton.forEach(button =>{
    button.onclick = function(){
        content.classList.add('showDetail');

        document.getElementById('left').style.opacity = '0';
        document.getElementById('left').style.pointerEvents = 'none';
        document.getElementById('right').style.opacity = '0';
        document.getElementById('right').style.pointerEvents = 'none';

        document.getElementById('back').style.opacity = '1';
        document.getElementById('back').style.pointerEvents = 'auto';
    }
})

backButton.onclick = function(){
    content.classList.remove('showDetail');
    document.getElementById('left').style.opacity = '1';
    document.getElementById('left').style.pointerEvents = 'auto';
    document.getElementById('right').style.opacity = '1';
    document.getElementById('right').style.pointerEvents = 'auto';

    document.getElementById('back').style.opacity = '0';
    document.getElementById('back').style.pointerEvents = 'none';
}

