import { paint } from '@rex/h'
import pageConfig from '@pages/pageConfig'
import component from './component'
import markup from '@markup'

@paint(component)
@markup(pageConfig)
class Home {

}

export default Home
