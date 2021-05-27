const firstClass = document.getElementById("first-class")
const economyClass = document.getElementById("economy-class")
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


// form ticket handler
function TicketClassHandler(ticketClass, isIncrease) {

    let ticketCount = parseInt(ticketClass.value)
    if (isIncrease == true) {
        ticketCount += 1
        ticketClass.value = ticketCount
    } else if (isIncrease == false && ticketCount > 0) {
        ticketCount -= 1
        ticketClass.value = ticketCount
    }

    total()

}

function total(){

    let ticketCountEconomy = economyClass.value
    console.log(ticketCountEconomy)
    ticketCountEconomy = parseInt(ticketCountEconomy)

    let ticketCountFirst = firstClass.value
    console.log(ticketCountFirst)
    ticketCountFirst = parseInt(ticketCountFirst)

    // subtotal
    let subTotalCost = (150 * ticketCountFirst + 100 * ticketCountEconomy)
    subTotal.textContent = "$" + subTotalCost

    // tax
    let tax = (subTotalCost * 10) / 100
    tax = tax.toFixed(2)
    document.getElementById("tax").textContent = "$" + tax

    //total
    let grandTotal = (parseFloat(subTotalCost) + parseFloat(tax))
    grandTotal = grandTotal.toFixed(2)
    document.getElementById("grandTotal").innerText = "$" + grandTotal
}