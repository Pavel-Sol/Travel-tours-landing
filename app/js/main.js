let burger = document.querySelector('.burger')

burger.addEventListener('click', function () {
    document.querySelector('.header__nav').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
    this.classList.toggle('active')
})