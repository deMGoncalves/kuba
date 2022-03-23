import * as settings from '@kuba/settings'
import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Author {
  get content () {
    return settings.app.author
  }
}

export default Author
