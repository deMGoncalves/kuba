import * as f from '@kuba/f'
import { before } from '@kuba/middleware'
import tamanho from './tamanho'

const onView = before(function (shape) {
  f.idle(f.chain(tamanho))(shape)
  return [shape]
})

export default {
  onView
}
