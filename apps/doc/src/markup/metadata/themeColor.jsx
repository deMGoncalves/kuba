import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<meta name='theme-color' content={f.or(page.themeColor, '#1a1a1a')} />)
