let btnOpenSimulator = document.querySelector(".go-to-simulator-h3")
let btnCloseSimulator = document.querySelector(".span-for-closing-simulator")
let simulatorOverlay = document.querySelector(".simulator-overlay")
let greetingContainer = document.querySelector(".containr-fo-greeting")

let btnForTicket1 = document.querySelector(".btn-for-ticket1")
let btnForTicket2 = document.querySelector(".btn-for-ticket2")
let btnForTicket3 = document.querySelector(".btn-for-ticket3")
let containerTicket = document.querySelector(".simulator-choose-ticket") 

let containerForm = document.querySelector(".simulator-form-container")
let getTicketInfo = document.querySelector(".get-ticket-info")
let simulatorFormGoBack = document.querySelector(".simulator-form-arrow-back")

simulatorFormGoBack.addEventListener("click", fSimulatorFormGoBack)
btnOpenSimulator.addEventListener("click", fOpenSimulator)
btnCloseSimulator.addEventListener("click", fCloseSimulator)

function fOpenSimulator() {
    simulatorOverlay.style.display = "block"
}

function fCloseSimulator() {
    simulatorOverlay.style.display = "none"
}

btnForTicket1.addEventListener("click", fOpenTicket1)
btnForTicket2.addEventListener("click", fOpenTicket2)
btnForTicket3.addEventListener("click", fOpenTicket3)

function fOpenTicket1() {
    containerTicket.style.display = "none"
    containerForm.style.display = "flex"
    getTicketInfo.textContent = "You have chosen the Standard ticket."
}
function fOpenTicket2() {
    containerTicket.style.display = "none"
    containerForm.style.display = "flex"
    getTicketInfo.textContent = "You have chosen the VIP ticket."
}
function fOpenTicket3() {
    containerTicket.style.display = "none"
    containerForm.style.display = "flex"
    getTicketInfo.textContent = "You have chosen the Exclusive ticket."
}

function fSimulatorFormGoBack() {
    containerForm.style.display = "none"
    containerTicket.style.display = "flex"
}

let arrowItem1 = document.querySelector(".ArrowItem1")
let arrowItem2 = document.querySelector(".ArrowItem2")
let arrowItem3 = document.querySelector(".ArrowItem3")
let arrowItem4 = document.querySelector(".ArrowItem4")
let arrowItem5 = document.querySelector(".ArrowItem5")

let item1 = document.querySelector(".item1")
let item2 = document.querySelector(".item2")
let item3 = document.querySelector(".item3")
let item4 = document.querySelector(".item4")
let item5 = document.querySelector(".item5")

let formSubmit = document.querySelector(".formSubmit")


arrowItem1.addEventListener("click", fGoItem2)
arrowItem2.addEventListener("click", fGoItem3)
arrowItem3.addEventListener("click", fGoItem4)
arrowItem4.addEventListener("click", fGoItem5)
arrowItem5.addEventListener("click", fSubmitItem)

let resultContainer = document.querySelector(".simulator-result-container")
let simulatorResultGoBack = document.querySelector(".simulator-results-arrow-back")


let personalItems = []

function fGoItem2() {
    item1.style.display = "none";
    arrowItem1.style.display = "none";
    item2.style.display = "block";
    arrowItem2.style.display = "block";

    let item1Value = document.querySelector(".item1").value 
    personalItems.push(item1Value)
}
function fGoItem3() {
    item2.style.display = "none";
    arrowItem2.style.display = "none";
    item1.style.display = "none";
    arrowItem1.style.display = "none";
    item3.style.display = "block";
    arrowItem3.style.display = "block";

    let item2Value = document.querySelector(".item2").value 
    personalItems.push(item2Value)
}
function fGoItem4() {
    item1.style.display = "none";
    arrowItem1.style.display = "none";
    item3.style.display = "none";
    arrowItem3.style.display = "none";
    item4.style.display = "block";
    arrowItem4.style.display = "block";

    let item3Value = document.querySelector(".item3").value 
    personalItems.push(item3Value)
}
function fGoItem5() {
    item1.style.display = "none";
    arrowItem1.style.display = "none";
    item4.style.display = "none";
    arrowItem4.style.display = "none";
    item5.style.display = "block";
    arrowItem5.style.display = "block";

    let item4Value = document.querySelector(".item4").value 
    personalItems.push(item4Value)
}

function fSubmitItem() {
    item1.style.display = "none";
    arrowItem1.style.display = "none";
    item4.style.display = "none";
    arrowItem4.style.display = "none";
    formSubmit.style.display = "block"

    let item5Value = document.querySelector(".item5").value 
    personalItems.push(item5Value)
}
 

class Simulator {
    constructor(destination, company, personalItems) {
        this.destination = destination;
        this.company = company;
        this.personalItems = personalItems;
    }
}


formSubmit.addEventListener("click", simulator1)
let showResults = document.querySelector(".show-results")

function simulator1() {
    let destination = document.querySelector('input[name="departure"]:checked').value
    let company = document.querySelector('input[name="companie"]:checked').value

    const simulador = new Simulator (destination, company, personalItems)

    containerForm.style.display = "none";
    resultContainer.style.display = "flex";
    console.log(simulador)

    for (const key in simulador) {
        showResults.textContent += (simulador[key]) + <br/> 
        console.log(simulador[key])
    }
}


// for (let clave in perro){
//     console.log(perro[clave]);
//   }
//   /*
//   "Scott"
//   "Negro"
//   true
//   5
//   */

simulatorResultGoBack.addEventListener("click", fSimulatorResultGoBack)

function fSimulatorResultGoBack() {
    containerForm.style.display = "flex"
    resultContainer.style.display = "none"
}





