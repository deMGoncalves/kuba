import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<title>{ f.or(page.title, 'MagTek - Ímãs e Equipamentos Magnéticos') }</title>)
