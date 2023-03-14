let rainy = document.querySelector(".rainy")
let cold = document.querySelector(".cold")
let hot = document.querySelector(".hot")

let coldSpan = document.querySelectorAll(".cold-span")
let rainSpan = document.querySelectorAll(".rain-span")
let hotSpan = document.querySelectorAll(".hot-span")

let explorationFilter = document.querySelector(".moon-exploration__filter")

rainy.addEventListener("click", ()=> {
    rainSpan.forEach((elemento)=>  elemento.style.display = "block")
    coldSpan.forEach((elemento)=>  elemento.style.display = "none")
    hotSpan.forEach((elemento)=>  elemento.style.display = "none")
})
cold.addEventListener("click", ()=> {
    coldSpan.forEach((elemento)=>  elemento.style.display = "block")
    rainSpan.forEach((elemento)=>  elemento.style.display = "none")
    hotSpan.forEach((elemento)=>  elemento.style.display = "none")
})
hot.addEventListener("click", ()=>{
    hotSpan.forEach((elemento)=>  elemento.style.display = "block")
    rainSpan.forEach((elemento)=>  elemento.style.display = "none")
    coldSpan.forEach((elemento)=>  elemento.style.display = "none")
    
})

  window.addEventListener("scroll", ()=>{
    let distance = document.documentElement.scrollTop || document.body.scrollTop;
    let maxDistance = 900;
    if (distance > maxDistance){
        explorationFilter.style.visibility = "visible"
        explorationFilter.classList.add("show")
    } 
  })

  let coldWeatherCard1 = document.querySelector(".cold-weather-card1")
  let coldSpan1 = document.querySelector(".cold-span1")
  let coldSpan2 = document.querySelector(".cold-span2")



  
  class EachWeather {
    constructor (name, description, image){
        this.name = name;
        this.description = description;
        this.image = new Image();
        this.image.src = image;
    }
  }

  const coldObj1 = new EachWeather("Alaskisan", "blablablablablablablablablabla", "/Assets/img/ALAKSA.jpg")
  const coldObj2 = new EachWeather("Antartisan", "blablablablablablablablablabla", "/Assets/img/ANTARTIDA.webp")


  let flag = null
  let h3s = document.querySelector(".h3s")
  let parag = document.querySelector(".parag")

  coldSpan2.addEventListener("click", ()=> {
    console.log(flag)
    flag = false
    if (flag == false) {
      flag = true;
      h3s.innerHTML = ""
      parag.innerHTML = ""
      for (const propiedad in coldObj2) {
        if (propiedad === "name") {
          h3s.innerHTML = coldObj2[propiedad]
        }  else if (propiedad === "description") {
          parag.innerHTML = coldObj2[propiedad]
        } 
        else if (propiedad === "image") {
          const image = coldObj2[propiedad];
          coldWeatherCard1.appendChild(image)
          image.classList.add("image");
          flag = true
        }
      }

    }
})

coldSpan1.addEventListener("click", ()=> {
  coldWeatherCard1.style.display = "block"
  console.log(flag)
  flag = false
  if (flag == false) {
    flag = true;
    h3s.innerHTML = ""
    parag.innerHTML = ""
    for (const propiedad in coldObj1) {
      if (propiedad === "name") {
        h3s.innerHTML = coldObj1[propiedad]
      }  else if (propiedad === "description") {
        parag.innerHTML = coldObj1[propiedad]
      } 
      else if (propiedad === "image") {
        const image = coldObj1[propiedad];
        coldWeatherCard1.appendChild(image)
        image.classList.add("image");
        flag = true
      }
    }

  }
})

// function FmostrarResultado() {
//   if (empleadosFlag == false) {
//       empleadosFlag = true;
//       div_ine.innerHTML = "";
//       for(item of empleadosActuales){
//           div_ine.innerHTML += `<p>${"Nombre:"}${item.Nombre} ${"Apellido:"} ${item.Apellido} ${"Sueldo:"} ${item.Sueldo}</p>`;
//       }
//   }
  



