import * as f from '@kuba/f'
import { before } from '@kuba/middleware'
import marca from './marca'
import material from './material'
import tamanho from './tamanho'

const onView = before(function (shape) {
  f.idle(f.chain(marca, material, tamanho))(shape)
  return [shape]
})

export default {
  onView
}
