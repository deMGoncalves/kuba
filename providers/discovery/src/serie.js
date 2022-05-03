import champion from './champion'
import toScore from './toScore'

export default function (name) {
  return {
    champion () {
      return champion(name)
    },

    toScore (champions = []) {
      toScore(name, champions)
      return this
    }
  }
}
