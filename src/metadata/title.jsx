import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<title>{ f.or(page.title, 'Zuen') }</title>)
