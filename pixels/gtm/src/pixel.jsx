import h, { render } from '@rex/h'
import * as f from '@rex/f'
import dataLayer from './dataLayer'
import schema from './schema.json'

dataLayer.push({
  'gtm.start': new Date().getTime(),
  'event': 'gtm.js'
})

f.idle(() =>
  render(document.head, <script src={`https://www.googletagmanager.com/gtm.js?id=${schema.id}`} async />))

export default dataLayer
