'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const photos = document.querySelectorAll(".image");
const btnClose = document.querySelector('.close-modal');
const btnNext = document.querySelector('.next-modal');
const btnPrevious = document.querySelector('.previous-modal');
const startImage = document.querySelector('.image-slide');
const imgTitle = document.querySelector(".image-title");

let n;
let index = 1;

function setIndex(ind){
    index = ind;
    console.log(index);
}

const openModal = function(){
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    startImage.src =  dir+'/img/' + index + '.jpg';
    modal.classList.remove('hidden');
    
    overlay.classList.remove('hidden');
    console.log(image);

    var element = document.getElementsByTagName("img")[index-1].getAttribute("title");
    imgTitle.textContent = element;
    console.log(element);
}

for(let i = 0; i < photos.length; i++){
    photos[i].addEventListener('click', openModal);
};


const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const image = document.querySelector(".image-slide");

const nextModal = function(){
    console.log(image);
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    
    if(index >= photos.length)
        index = 1;
    else
        index++;
    image.src = dir+'/img/' + index + '.jpg';
    var element = document.getElementsByTagName("img")[index-1].getAttribute("title");
    imgTitle.textContent = element;
}

btnNext.addEventListener('click', nextModal);

const previousModal = function(){
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    if(index <= 1)
        index = photos.length;
    else
        index--;
    image.src = dir + '/img/' + index + '.jpg';
    var element = document.getElementsByTagName("img")[index-1].getAttribute("title");
    imgTitle.textContent = element;
}

btnPrevious.addEventListener('click', previousModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });