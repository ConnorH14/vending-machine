import { ProxyState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js";

function _drawMoney(){

    let currentMoney = ProxyState.money.amount

    document.getElementById('user-money').innerHTML = `$${currentMoney}`
}

export class MoneyController{
  constructor(){
      ProxyState.on('money', _drawMoney)
      _drawMoney()
  }

  purchaseSnack(snackName){
    moneyService.doPurchaseSnack(snackName)    
}

}