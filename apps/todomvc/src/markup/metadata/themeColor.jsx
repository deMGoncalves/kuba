import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <meta name='theme-color' content={f.or(page.themeColor, f.prop('themeColor', config))} />)
