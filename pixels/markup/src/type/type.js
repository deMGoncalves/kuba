import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Type {
  get content () {
    return 'website'
  }
}

export default Type
