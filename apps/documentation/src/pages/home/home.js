import { paint } from '@rex/h'
import component from './component'
import markut from '@markup'

import Navigation from './navigation'

const oneOff = Symbol('oneOff')

@paint(component)
@markut
class Home {
  get navigation () {
    return this[oneOff].navigation
  }

  constructor (props) {
    this[oneOff] = { ...props }
    this[oneOff].navigation = new Navigation()
  }
}

export default Home
