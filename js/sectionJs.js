const CompactCarBtn = document.querySelector('.Compact__btn')
const sportsCarBtn = document.querySelector('.sports__btn')
const vansCarBtn = document.querySelector('.vans__btn')
const allCarBtn = document.querySelector('.chooseCar__btnAll')

const vansCards = document.querySelector('.Vans')
const sportsCards = document.querySelector('.Sports')
const compactCards = document.querySelector('.Compact')

vansCards.style.display = "none"
sportsCards.style.display = "none"
compactCards.style.display = "grid"

CompactCarBtn.addEventListener('click', ()=>{
    CompactCarBtn.classList.add('choseBtn__active')
    sportsCarBtn.classList.remove('choseBtn__active')
    vansCarBtn.classList.remove('choseBtn__active')
     
    vansCards.style.display = "none"
    sportsCards.style.display = "none"
    compactCards.style.display = "grid"
})
sportsCarBtn.addEventListener('click', ()=>{
    sportsCarBtn.classList.add('choseBtn__active')

    CompactCarBtn.classList.remove('choseBtn__active')
    vansCarBtn.classList.remove('choseBtn__active')


    vansCards.style.display = "none"
    sportsCards.style.display = "grid"
    compactCards.style.display = "none"
})
vansCarBtn.addEventListener('click', ()=>{

    vansCarBtn.classList.add('choseBtn__active')

    CompactCarBtn.classList.remove('choseBtn__active')
    sportsCarBtn.classList.remove('choseBtn__active')


    vansCards.style.display = "grid"
    sportsCards.style.display = "none"
    compactCards.style.display = "none"
})
allCarBtn.addEventListener('click', ()=>{
    vansCards.style.display = "grid"
    sportsCards.style.display = "grid"
    compactCards.style.display = "grid"

    vansCarBtn.classList.remove('choseBtn__active')
    CompactCarBtn.classList.remove('choseBtn__active')
    sportsCarBtn.classList.remove('choseBtn__active')

})