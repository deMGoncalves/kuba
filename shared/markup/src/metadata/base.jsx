import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <base href={f.or(page.base, f.prop('base', config))} />)
