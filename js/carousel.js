let pagination = document.querySelectorAll('.ball');
let carousel = document.getElementById('carousel');
let cards = document.querySelectorAll('.carousel_card');
let leftBtn = document.getElementById('leftArrow');
let rightBtn = document.getElementById('rightArrow');
let section = 0

const updatePag = () => {
    pagination.forEach((el) => el.style.width = '15px');
    pagination[section].style.width = '100px'
}

pagination.forEach((curItem, index) => {
    curItem.addEventListener('click', () => {
        section = index;
        updatePag()
        carousel.scrollLeft = (index * (window.innerWidth - 330)) + (index * 10)
    })
})

leftBtn.addEventListener('click', () => {
    if (section > 0) {
        section--
        carousel.scrollLeft = (section * (window.innerWidth - 330)) + (section)
        updatePag()
    }
})
rightBtn.addEventListener('click', () => {
    if (section < 2) {
        section++
        carousel.scrollLeft = (section * (window.innerWidth - 330)) + (section)
        updatePag()
    }
})