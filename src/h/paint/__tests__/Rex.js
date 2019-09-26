import * as f from '@f'
import paint from '../paint'
import component from './component'

@paint(component)
class Rex {
  static get ehUmCachorro () {
    return 'Claro que NaN'
  }

  [f.__is__] (Klass) {
    return this instanceof Klass
  }
}

export default Rex
