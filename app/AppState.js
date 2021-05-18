import { Snack } from "./Models/Snack.js"
import { Money } from "./Models/Money.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  
  snacks = {
    snickers: new Snack("Snickers", 2, '#673136'),
    reeses: new Snack("Reeses", 2, '#F64F00'),
    doritos: new Snack("Doritos", 3, '#DA1B20'),
    lays: new Snack("Lays", 3, '#F7D607'),
    twix: new Snack("Twix", 1, '#D19D16'),
    mnms: new Snack("MnMs", 1, '#4C2713')
  }

  money = new Money(50)

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
