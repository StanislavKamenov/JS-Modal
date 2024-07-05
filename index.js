let openButton = document.querySelector('.open')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close')

openButton.addEventListener('click', () =>  {
    modal.classList.add('show')
})

close.addEventListener('click', () =>  {
    modal.classList.remove('show')
})