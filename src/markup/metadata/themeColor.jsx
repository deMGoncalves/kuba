import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta name='theme-color' content={f.or(page.themeColor, '#0a0a0a')} />)
