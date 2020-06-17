import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.appendChild(<meta name='theme-color' content={f.or(page.themeColor, '#1A1A1A')} />)
