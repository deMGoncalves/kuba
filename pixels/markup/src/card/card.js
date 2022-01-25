import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Card {
  get content () {
    return 'summary_large_image'
  }
}

export default Card
