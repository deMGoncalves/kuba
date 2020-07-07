import description from './description'
import image from './image'
import site from './site'
import summary from './summary'
import title from './title'

export default (page) =>
  [
    description,
    image,
    site,
    summary,
    title
  ].forEach(t => t(page))
