'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
const IMG_PATH = 'images/';
let timer;
let count = 0;
let timeout;
let interval;


let slides = [{src :"1.jpg", title : "Streetart"},{src :"2.jpg", title : "Boston"},{src :"3.jpg", title : "Company"},{src :"4.jpg", title : "Building"},{src :"5.jpg", title : "Cyberpunk"},{src :"6.jpg", title : "Tour eiffel"}]

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function puceColore(c)
{
    for(let j=0; j<slides.length; j++)
    {
        puces[j].classList.remove('colored');
    }
    puces[c].classList.add('colored');
}
function afficheNav()
{
    nav.classList.toggle('hide');
    ic.classList.toggle('fa-arrow-right');
    ic.classList.toggle('fa-arrow-down');
}

function showNext()
{
    count++;
    if (count==slides.length){
        count=0;    
     }
    //console.log(slides.length);
    image.src = IMG_PATH + slides[count].src;
    titre.textContent = slides[count].title ; 
    puceColore(count);
}

function showPrevious()
{
    count--;
    if (count<0){
        count=slides.length-1;
    }
    image.src = IMG_PATH + slides[count].src;
    titre.textcontent =slides[count].title ;
    puceColore(count);
}

function showHazard()
{
    let val = getRandomInteger(0, slides.length-1);
    if (val==count)
    {
        showHazard();
    }
    image.src = IMG_PATH + slides[val].src;
    titre.textcontent =slides[val].title ;
    puceColore(val);
}

function showPlay()
{
    interval = window.setInterval(showNext, 1000);
    jouer.classList.add('hide');
    stoper.classList.remove('hide');
    
}

function showStop()
{
    window.clearInterval(interval);
    stoper.classList.add('hide');
    jouer.classList.remove('hide');
}

function showRandom()
{
    interval = window.setInterval(showHazard, 1000);
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

const toolbar = document.querySelector('#toolbar-toggle');
const nav = document.querySelector('#nav');
const ic = document.querySelector('#icon');

const suivant = document.querySelector('#slider-forward');
const precedent = document.querySelector('#slider-backward');
const jouer = document.querySelector('#slider-play');
const stoper = document.querySelector('#slider-stop');
const hazard = document.querySelector('#slider-random');

//const fig = document.getElementById('car ');
const image = document.querySelector('#car img');
const titre = document.querySelector('#car figcaption');
//const image= fig.getElementsByTagName('img');
//const titre= fig.getElementsByTagName('figcaption');
//const firingButton = document.getElementById('firing-button');


toolbar.addEventListener('click', afficheNav);
suivant.addEventListener('click', showNext);
precedent.addEventListener('click', showPrevious);
jouer.addEventListener('click', showPlay);
stoper.addEventListener('click', showStop);
hazard.addEventListener('click', showRandom);


document.write('<div class="flex">');
for (let i=0; i<slides.length; i++){   
    document.write("<div class='puce' ></div>");
}
document.write('</div>');
let puces = document.querySelectorAll('.puce');



