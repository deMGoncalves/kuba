import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.appendChild(<link rel='alternate' href={f.or(page.alternate, location.href)} hrefLang='x-default' />)
