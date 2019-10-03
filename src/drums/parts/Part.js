import { audio } from './component'

const media = Symbol('media')

class Part {
  get key () {
    throw new Error('Deve implementar o getter key')
  }

  get sound () {
    throw new Error('Deve implementar o getter sound')
  }

  constructor (file) {
    this[media] = new Audio()
    this[media].src = file
    this[media].onended = this.stop.bind(this)
    return this
  }

  play () {
    this[audio] = 'playing'
    this[media].currentTime = 0
    this[media].play()
    return this
  }

  stop () {
    this[audio] = 'stopped'
    return this
  }
}

export default Part
