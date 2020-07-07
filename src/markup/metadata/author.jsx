import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta name='author' content={f.or(page.author, 'Zuen')} />)
