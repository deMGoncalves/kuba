import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <meta property='og:site_name' content={f.or(page.title, f.prop('name', config), console.log(config))} />)
