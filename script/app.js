const itemSlide = document.querySelectorAll('.container-slides img');
const nbSlide = itemSlide.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

suivant.addEventListener('click', slideSuivante);
function slideSuivante() {
    itemSlide[count].classList.remove('active');

    if(count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    itemSlide[count].classList.add('active');
}

precedent.addEventListener('click', slidePrecedente);
function slidePrecedente() {
    itemSlide[count].classList.remove('active');

    if(count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    itemSlide[count].classList.add('active');
}