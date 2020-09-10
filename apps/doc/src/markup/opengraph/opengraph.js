import * as f from '@rex/f'
import description from './description'
import image from './image'
import locale from './locale'
import siteName from './siteName'
import title from './title'
import type from './type'
import url from './url'

export default (page) =>
  f.forEach(
    [description, image, locale, siteName, title, type, url],
    o => o(page)
  )
