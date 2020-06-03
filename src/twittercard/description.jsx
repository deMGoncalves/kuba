import h from '@h'
import * as f from '@f'

const __description__ = Symbol('description')
const defaultDescription = 'JRMod é uma empresa de modificação e aperfeiçoamento de pedais de efeitos do Brasil, considerada uma das melhores do mercado'

export default (page) =>
  document.head.appendChild(<meta name='twitter:description' content={f.or(page[__description__], defaultDescription)} />)

export {
  __description__
}
