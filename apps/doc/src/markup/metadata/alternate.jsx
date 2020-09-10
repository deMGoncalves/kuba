import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<link rel='alternate' href={f.or(page.alternate, location.href)} hrefLang='x-default' />)
