import { ProxyState } from "../AppState.js";

class MoneyService{

    doPurchaseSnack(snackName){
        let snack = ProxyState.snacks[snackName]
        if(!snack){
            throw new Error('Incorrect Snack ' + snackName)
        }
        if(ProxyState.money.amount >= snack.price){
          ProxyState.money.amount -= snack.price
          ProxyState.money = ProxyState.money
        }
        

    }
}

// SINGLETON
export const moneyService = new MoneyService()