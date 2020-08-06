import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<meta name='twitter:description' content={f.or(page.description, 'Comercializamos Ímãs de todos os tipos para aplicações diversificadas, fabricamos Equipamentos Magnéticos sob medida para todos setores da indústria')} />)
