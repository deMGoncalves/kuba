import h, { render } from '@rex/h'
import * as f from '@rex/f'
import bot from '@rex/bot'
import gtag from './gtag'
import schema from './schema.json'

gtag('js', new Date())
gtag('config', schema.id)

if (f.not(bot))
  f.idle(() =>
    render(document.head, <script src={`https://www.googletagmanager.com/gtag/js?id=${schema.id}`} async />))

export default gtag
