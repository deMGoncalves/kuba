import { paint } from '@h'
import component from './component'
import markut from '@markup'

@paint(component)
@markut
class iPhone {
  get description () {
    return 'Descubra mais sobre o iPhone, o aparelho pessoal mais poderoso do mundo. Confira os novos iPhone 11, iPhone 11 Pro e iPhone 11 Pro Max.'
  }

  get title () {
    return 'iPhone - Apple (BR)'
  }
}

export default iPhone
