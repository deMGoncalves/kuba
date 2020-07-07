import description from './description'
import image from './image'
import locale from './locale'
import siteName from './siteName'
import title from './title'
import type from './type'
import url from './url'

export default (page) =>
  [
    description,
    image,
    locale,
    siteName,
    title,
    type,
    url
  ].forEach(o => o(page))
