let astronauta = document.querySelector(".astronauta")
let planeta = document.querySelector(".planeta")

window.addEventListener("scroll", ()=> {
    let value = window.scrollY;
    astronauta.style.bottom = value * -1.1 + "px";
})