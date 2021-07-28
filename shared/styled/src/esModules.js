import * as f from '@kuba/f'
import hash from './hash'

export default function (textContent) {
  const mapper = {}
  const textContentFormatted = f.replace(
    textContent,
    /\.([\w-_]+)/ig,
    (_, $1) => mapper[$1] || (mapper[$1] = `._${hash()}`)
  )
  
  return [mapper, textContentFormatted]
}
