import * as f from '@rex/f'
import description from './description'
import image from './image'
import site from './site'
import summary from './summary'
import title from './title'

export default f.chain(description, image, site, summary, title)
