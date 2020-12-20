// бургер-меню
let burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
    document.querySelector('.header__nav').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
    this.classList.toggle('active')
})

// слайдер нативный
const arrowPrew = document.querySelector('.arrow-prew');
const arrowNext = document.querySelector('.arrow-next');
const destinationsItems = document.querySelectorAll('.destinations__item');
let countSliders = 0;

arrowPrew.addEventListener('click', function () {
    destinationsItems[countSliders].classList.add('hidden')
    if (countSliders == 0) {
        countSliders = destinationsItems.length - 1
    } else {
        countSliders--
    }
    destinationsItems[countSliders].classList.remove('hidden')

})

arrowNext.addEventListener('click', function () {
    destinationsItems[countSliders].classList.add('hidden')
    if (countSliders == destinationsItems.length - 1) {
        countSliders = 0
    } else {
        countSliders++
    }
    destinationsItems[countSliders].classList.remove('hidden')
})