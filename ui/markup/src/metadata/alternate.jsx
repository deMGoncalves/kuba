import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  render(document.head, <link rel='alternate' href={f.or(page.alternate, location.href)} hrefLang='x-default' />)
