import h, { render } from '@rex/h'
import * as f from '@rex/f'
import bot from '@rex/bot'
import dataLayer from './dataLayer'
import schema from './schema.json'

dataLayer.push({
  'gtm.start': new Date().getTime(),
  'event': 'gtm.js'
})

if (f.not(bot))
  f.idle(() =>
    render(document.head, <script src={`https://www.googletagmanager.com/gtm.js?id=${schema.id}`} async />))

export default dataLayer
