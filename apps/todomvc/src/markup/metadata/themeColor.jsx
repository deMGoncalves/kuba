import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  render(document.head, <meta name='theme-color' content={f.or(page.themeColor, '#1a1a1a')} />)
