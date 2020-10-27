import h, { render } from '@rex/h'
import * as f from '@rex/f'
import schema from '@rex/markup/src/schema.json'

export default (page) =>
  render(document.head, <meta name='author' content={f.or(page.author, f.prop('author', schema))} />)
