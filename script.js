const ajSlac = document.getElementsByClassName("karavarum")[0];
const dzaxSlac = document.getElementsByClassName("karavarum2")[0];
const ourStory = document.getElementsByClassName("ourStory")[0]

let kojak = 0;


dzaxSlac.addEventListener("click", ()=>{
    ourStory.style.backgroundImage = "url('img/AND_1732.png')";
})


ajSlac.addEventListener("click", ()=>{
    ourStory.style.backgroundImage = "url('img/image.png')";
})

const gridNkar1 = document.getElementsByClassName("gridNkar1")[0];
let modal = document.getElementById("modal");
let title = document.getElementsByClassName("title")[0];
let modalNkar = document.getElementsByClassName("modalNkar")[0];
gridNkar1.addEventListener('click', ()=>{
    title.innerHTML = "Viennoiserie"
    modal.style.opacity = 1;
    modal.style.visibility = "visible"
    modalNkar.setAttribute("src","img/Viennoiserle image.png")
})

const gridNkar2 = document.getElementsByClassName("gridNkar2")[0];
gridNkar2.addEventListener('click', ()=>{
    title.innerHTML = "Boulangerie"
    modal.style.opacity = 1;
    modal.style.visibility = "visible"
    modalNkar.setAttribute("src","img/AND_1522.png")
})

const gridNkar3 = document.getElementsByClassName("gridNkar3")[0];
gridNkar3.addEventListener('click', ()=>{
    title.innerHTML = "Patisserie"
    modal.style.opacity = 1;
    modal.style.visibility = "visible"
    modalNkar.setAttribute("src","img/AND_1959.png")
})

const gridNkar4 = document.getElementsByClassName("gridNkar4")[0];
gridNkar4.addEventListener('click', ()=>{
    title.innerHTML = "Snacks"
    modal.style.opacity = 1;
    modal.style.visibility = "visible"
    modalNkar.setAttribute("src","img/ola-dybul-q2djeWt5k-8-unsplash.png")
})

const gridNkar5 = document.getElementsByClassName("gridNkar5")[0];
gridNkar5.addEventListener('click', ()=>{
    title.innerHTML = "Coffee And Tea"
    modal.style.opacity = 1;
    modal.style.visibility = "visible"
    modalNkar.setAttribute("src","img/AND_1944.png")
})

const gridNkar6 = document.getElementsByClassName("gridNkar6")[0];
gridNkar6.addEventListener('click', ()=>{
    title.innerHTML = "Gelato"
    modal.style.opacity = 1;
    modal.style.visibility = "visible"
    modalNkar.setAttribute("src","img/AND_1911-2.png")
})

const modaClose = document.getElementsByClassName("modaClose")[0];

modaClose.addEventListener("click", ()=>{
    location.href = "index.html"
});