const imagesArray = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp",
]

//recupero items-container
//inserisco le immagini all'interno di items-container
//FOR per far scorrere l'Array di stringhe
// per ogni elemento dell'Array creo un div
//metto all'interno del items-container il div
let i = 0;
const itemsContainerDOMElement = document.querySelector(".items-container")
const buttonNextDomElement = document.querySelector(".next")
const buttonPrevDomElement = document.querySelector(".prev")

//al click di next faccio questo 
buttonNextDomElement.addEventListener('click', function () {
    i++
    if (i > 4) {
        i = 0
    }
        const imagePath = imagesArray[i]
        const sliderItemHtml = ` <img src="${imagePath}" alt>`
        console.log(imagePath)
        document.querySelector(".img").innerHTML = `${sliderItemHtml}`
    
})

//al click di prev faccio questo 
buttonPrevDomElement.addEventListener('click', function () {
    i--
    if (i < 0){
        i = 4
    }
    
        
        const imagePath = imagesArray[i]
        const sliderItemHtml = ` <img src="${imagePath}" alt>`
        console.log(imagePath)
        document.querySelector(".img").innerHTML = `${sliderItemHtml}`

})

const imagesArrayj = [
    "./img-1/1.jpg",
    "./img-1/2.jpg",
    "./img-1/3.jpg",
]
let j = 0;
const itemsContainerDOMElement1 = document.querySelector(".items-container")
const buttonNextDomElement1 = document.querySelector(".next-1")
const buttonPrevDomElement1 = document.querySelector(".prev-1")

//al click di next faccio questo 
buttonNextDomElement1.addEventListener('click', function () {
    j++
    if (j > 2) {
        j = 0
    }
    const imagePath1 = imagesArrayj[j]
    const sliderItemHtml1 = ` <img src="${imagePath1}" alt>`
    console.log(imagePath1)
    document.querySelector(".img-1").innerHTML = `${sliderItemHtml1}`
    
})

//al click di prev faccio questo 
buttonPrevDomElement1.addEventListener('click', function () {
    j --
    if(j < 0){
        j = 2
    }
        const imagePath1 = imagesArrayj[j]
        const sliderItemHtml1 = ` <img src="${imagePath1}" alt>`
        console.log(imagePath1)
        document.querySelector(".img-1").innerHTML = `${sliderItemHtml1}`


})

