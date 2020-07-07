import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<link href={f.or(page.manifest, '/manifest.json')} rel='manifest' />)
