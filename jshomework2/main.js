/* 
    Задание 1:

    Доделать слайдер с урока

    1. Переписать код слайдера с урока по видео
    2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

*/
const slides = document.querySelectorAll('.slide');
const next = document.getElementById('btn-next');
const prev = document.getElementById('btn-prev');
const dots = document.querySelectorAll('.dot');
let index = 0;










const activeDot = n => {
    for(i=0; i<slides.length; i++){
        dots[i].classList.remove('active');
        slides[i].classList.remove('active');
    };
    dots[n].classList.add('active');
    slides[n].classList.add('active');
};
const activeSlide = n => {
    for(i=0; i<slides.length; i++){
        slides[i].classList.remove('active');
    };
    slides[n].classList.add('active');
};
function nextSlide () {
    if(index == slides.length - 1){
        index = 0;
        console.log(index);
        activeSlide(index);
        activeDot(index);
    } else{
        index++;
        console.log(index);
        activeSlide(index);
        activeDot(index);
    }
    autoSlider();
}
const prevSlide = () => {
    if(index == 0){
        index = 2;
        activeSlide(index);
        activeDot(index);
    } else{
        index--;
        activeSlide(index);
        activeDot(index);
    }
}
function autoSlider () {
    setTimeout(nextSlide, 2000);
};
autoSlider();


next.addEventListener('click', () => {
    nextSlide();
});
prev.addEventListener('click', () => {
    prevSlide();
});
dots.forEach((item, dotIndex)=>{
    item.addEventListener('click', ()=> {
        index = dotIndex;
        activeDot(index);
    });
});
/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/
const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const moreContent = document.querySelectorAll('.moreContent');
const contentTabs = document.querySelector('.contentTabs');



const activeBtn = x => {
    for(i=0; i<tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    };
    x.classList.add('active');
};
tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    activeBtn(e.target);
    for(i=0; i<content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab){
            content[i].classList.add('active');
        }
    };
});

const activeContentBtn = x =>{
    for(i=0; i<contentTabs.children.length; i++){
        contentTabs.children[i].classList.remove('active');
    };
    x.classList.add('active');
}
contentTabs.addEventListener('click', e =>{
    currContentTab = e.target.dataset.contentbtn;
    activeContentBtn(e.target);
    for(i=0; i<moreContent.length; i++){
        moreContent[i].classList.remove('active');
        if(moreContent[i].dataset.morecontent === currContentTab){
            moreContent[i].classList.add('active');
        };
    };
});

