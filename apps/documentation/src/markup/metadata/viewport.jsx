import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<meta name='viewport' content={f.or(page.viewport, 'width=device-width, initial-scale=1, shrink-to-fit=no')} />)
