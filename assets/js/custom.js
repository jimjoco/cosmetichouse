const toggler = document.querySelector('.menu-toggler')
const mnav = document.querySelector('.mobile-nav')

toggler.addEventListener('click', (e) => {
  e.preventDefault();
  mnav.classList.add('show')
})

const close = document.querySelector('.mobile-nav .close')

close.addEventListener('click', (e) => {
  e.preventDefault();
  mnav.classList.remove('show')
})