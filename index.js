const firstClass = document.getElementById("first-class");
const economyClass = document.getElementById("economy")

const addFirstClassPrice = document.getElementById("add-first-class-price")
const decreaseFirstClassPrice = document.getElementById("decrease-first-class-price")

const addEconomyPrice = document.getElementById("add-economy-class-price")
const decreaseEconomyPrice = document.getElementById("decrease-economy-class-price")

const subTotal = document.getElementById("subtotal-price")

const priceOfFirstClass = 150
const priceOfEconomyClass = 100

// event listener first class ticket
addFirstClassPrice.addEventListener("click", () => TicketClassHandler(firstClass, true))
decreaseFirstClassPrice.addEventListener("click", () => TicketClassHandler(firstClass, false))

// event listener economy class ticket
addEconomyPrice.addEventListener("click", () => TicketClassHandler(economyClass, true))
decreaseEconomyPrice.addEventListener("click", () => TicketClassHandler(economyClass, false))

let ticketCount = 0

// form ticket handler
function TicketClassHandler(ticketClass, isIncrease) {

    if (isIncrease == true) {
        ticketCount++
        ticketClass.value = ticketCount
    } else if (isIncrease == false && ticketCount > 0) {
        ticketCount--
        ticketClass.value = ticketCount
    }

    // subtotal
    let subTotalCost = (priceOfEconomyClass * ticketCount) + (priceOfFirstClass + ticketCount)
    subTotal.textContent = "$" + subTotalCost

    // tax
    let tax = (subTotalCost * 10) / 100
    tax = tax.toFixed(2)
    document.getElementById("tax").textContent = "$" + tax

    //total
    let grandTotal = (parseFloat(subTotalCost) + parseFloat(tax))
    grandTotal = grandTotal.toFixed(2)
    document.getElementById("grandTotal").innerText = "$" +grandTotal

}