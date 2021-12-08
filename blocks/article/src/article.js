import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Article {
  get name () {
    return 'article'
  }
}

export default Article
