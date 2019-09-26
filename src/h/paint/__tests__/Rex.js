import paint from '../paint'
import component from './component'

@paint(component)
class Rex {
  static get nome () {
    return 'Rex.JS'
  }

  static set nome (value) {
    throw new Error(`Nao pode alterar o nome para ${value}`)
  }

  static cante () {
    return 'NaNNaNNaNNaNNaN Batman!'
  }
}

export default Rex
