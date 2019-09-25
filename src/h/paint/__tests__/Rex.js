import paint from '../paint'
import component from './component'

const __nome = Symbol('nome')

@paint(component)
class Rex {
  static get ehUmCachorro () {
    return 'Claro que NaN'
  }

  static get nome () {
    return `Meu nome eh ${Rex[__nome]}`
  }

  static set nome (novoNome) {
    Rex[__nome] = novoNome
    return Rex
  }
}

export default Rex
