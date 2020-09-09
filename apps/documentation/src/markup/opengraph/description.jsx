import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<meta property='og:description' content={f.or(page.description, 'Developers these days are spoiled with choice when it comes to selecting an MV* framework for structuring and organizing their JavaScript web apps')} />)
