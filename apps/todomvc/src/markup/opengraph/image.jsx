import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(document.head.append(<meta property='og:image' content={f.or(page.image, 'https://magtek.web.app/magtek.png')} />))
