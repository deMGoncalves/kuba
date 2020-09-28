import h, { render } from '@rex/h'
import * as f from '@rex/f'
import schema from '@rex/markup/src/schema.json'

export default (page) =>
  render(document.head, <meta property='og:description' content={f.or(page.description, f.prop('description', schema))} />)
