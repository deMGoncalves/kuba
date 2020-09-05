import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  render(document.head, <meta name='author' content={f.or(page.author, 'Cleber de Moraes Gonçalves')} />)
