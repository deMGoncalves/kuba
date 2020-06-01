import { paint } from '@h'
import metadata from '@metadata'
import component from './component'

@paint(component)
@metadata
class Home {
  get title () {
    return 'JRMod - Chutando Lata'
  }
}

export default Home
