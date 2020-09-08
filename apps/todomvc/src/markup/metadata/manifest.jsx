import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <link href={f.or(page.manifest, f.prop('manifest', config))} rel='manifest' />)
