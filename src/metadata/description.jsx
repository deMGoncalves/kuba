import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta name='description' content={f.or(page.description, '')} />)
