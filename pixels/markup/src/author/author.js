import { paint } from '@kuba/h'
import * as settings from '@kuba/settings'
import component from './component'

@paint(component)
class Author {
  get content () {
    return settings.app.author
  }
}

export default Author
