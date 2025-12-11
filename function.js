import { question as input} from "readline-sync"
import { stockMarket } from "./data.js"

export function searchStock(identifier) {
    const returnMatchName = stockMarket.stocks.filter((stock) => stock.name === identifier)
    const returnMatchID = stockMarket.stocks.filter((stock) => stock.id === identifier)

    if (returnMatchName.length > 0) {
        return returnMatchName
    }
    else if (returnMatchID.length > 0) {
        return returnMatchID
    }
    else {
        console.log(identifier, "-> not found!")
        return []     
    }  
}
export function filterStocksByPrice(givenPrice, above){
    if (!Number.isNaN(givenPrice)) {
        if (above) {
            const returnAbovePrice = stockMarket.stocks.filter((stock) => stock.currentPrice > givenPrice)
            return returnAbovePrice
        }
        if (!above) {
            const returnBelowPrice = stockMarket.stocks.filter((stock) => stock.currentPrice < givenPrice)
            return returnBelowPrice
        }
        else{
            console.log("not found this price!")
            return []
        }
    }
    else{ 
        console.log("not a number")
        return []  
    }   
}
export function OperateOnStock(operation, identifier) {
    if (operation === 'buy') {
        const foundID = stockMarket.stocks.find((stock) => stock.id === identifier)
        const foundName = stockMarket.stocks.find((stock) => stock.name === identifier)
        if (foundID) {
            const askAmountID = Number(input("how many to buy? : "))
            foundID.previousPrices.push(foundID.currentPrice)
            foundID.availableStocks += askAmountID
            foundID.currentPrice *= 1.05
            stockMarket.stocks.forEach((stock) => stock.currentPrice *= 1.01)
            return
        }
        if (foundName) {
            const askAmountName = Number(input("how many to buy? : "))
            foundName.previousPrices.push(foundName.currentPrice)
            foundName.availableStocks += askAmountName
            foundName.currentPrice *= 1.05
            stockMarket.stocks.forEach((stock) => stock.currentPrice *= 1.01)
            return
        }
        }
    else if (operation === 'sell') {
        const foundIDSell = stockMarket.stocks.find((stock) => stock.id === identifier)
        const foundNameSell = stockMarket.stocks.find((stock) => stock.name === identifier)
        if (foundID) {
            const askAmountID = Number(input("how many to sell? : "))
            foundIDSell.previousPrices.push(foundIDSell.currentPrice)
            foundIDSell.availableStocks -= askAmountID
            foundIDSell.currentPrice *= 0.95
            stockMarket.stocks.forEach((stock) => stock.currentPrice *= 0.99)
            return
        }
        if (foundNameSell) {
            const askAmountName = Number(input("how many to sell? : "))
            foundNameSell.previousPrices.push(foundNameSell.currentPrice)
            foundNameSell.availableStocks -= askAmountName
            foundNameSell.currentPrice *= 0.95
            stockMarket.stocks.forEach((stock) => stock.currentPrice *= 0.99)
            return 
    }
    else {
        console.log("invalid!!!")
        return    
    }
            
}       
}
