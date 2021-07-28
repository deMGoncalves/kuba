import * as f from '@kuba/f'
import hash from './hash'

export default function (string) {
  const mapper = {}
  const textContent = f.replace(
    string,
    /\.([\w-_]+)/ig,
    (_, $1) => mapper[$1] || (mapper[$1] = `._${hash()}`)
  )
  
  return [mapper, textContent]
}
