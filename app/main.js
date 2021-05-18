import { ProxyState } from "./AppState.js"
import { SnacksController } from "./Controllers/SnacksController.js"
import { MoneyController } from "./Controllers/MoneyController.js"

class App {
  
  snacksController = new SnacksController()
  moneyController = new MoneyController()

}

window["app"] = new App();
