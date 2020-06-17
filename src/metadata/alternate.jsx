import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<link rel='alternate' href={f.or(page.alternate, location.href)} hrefLang='x-default' />)
