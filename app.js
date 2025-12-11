import { stockMarket } from "./data.js";
import { question as input} from "readline-sync"
import { searchStock, filterStocksByPrice, OperateOnStock } from "./function.js";

function main() {
    let menuChoice;
    while (menuChoice !== '4') {
        menuChoice = input(`
            -----MENU-----
            1. Search for a stock by name or id);
            2. Show all stocks above or below a given price
            3. Buy or sell a stock
            4. Exit\n
            enter your choice: `
        )
        switch (menuChoice) {
            case '1':
                const userAskFind = input("enter name/ID to finde: ")
                const searching = searchStock(userAskFind)
                console.log(searching);
                break;
            case '2':
                const userPrice = Number(input("enter a price to search: "))
                const userOrder = Number(input("enter 0 to below 1 to above: "))

                const filterPrice = filterStocksByPrice(userPrice, userOrder)
                console.log(filterPrice);
                break
            case '3':
                const askOperation = input("enter buy/sell: ").toLowerCase()
                if (askOperation !== 'buy' && askOperation !== 'sell') {
                    console.log("only text buy/sell!");
                    continue   
                }
                else {
                    const askIdentifier = input("enter a Id or NAME: ")
                    OperateOnStock(askOperation, askIdentifier)
                    stockMarket.lastUpdated = new Date()
                }
                break
            case '4':
                break
            default:
                break;
        }                        
    }      
}
main()

