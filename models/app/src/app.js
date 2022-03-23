import * as settings from '@kuba/settings'
import { paint } from '@kuba/h'
import component from './component'
import data from './data'
import jsonld from '@kuba/jsonld'
import props from '@kuba/props'

@paint(component)
@jsonld(data)
@props
class App {
  get name () {
    return settings.app.name
  }

  get url () {
    return settings.app.url
  }
}

export default App
