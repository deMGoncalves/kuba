import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta name='viewport' content={f.or(page.viewport, 'width=device-width, initial-scale=1, shrink-to-fit=no')} />)
