import { ProxyState } from "../AppState.js"

function _drawSnacks(){
  let template = ''

  Object.values(ProxyState.snacks)
        .forEach(snack =>{
            template += /*html*/` 
              <div  class="card-body">
                <button onclick="app.moneyController.purchaseSnack('${snack.name.toLowerCase()}')" class="btn" style="background-color: ${snack.color}; color: white">
                      ${snack.name}: $${Number(snack.price).toFixed(2)}
                  </button>
              </div>
            `
        })

        document.getElementById('vending-machine').innerHTML = template
}

// Number(snack.price).toFixed(2)

export class SnacksController{
  constructor(){
      ProxyState.on('snacks', _drawSnacks)
      _drawSnacks()
  }

}