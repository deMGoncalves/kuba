import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (picture) => (
  useEffect(() => picture.changeValor(
    global.shape.modelo,
    global.shape.thumbnail
  ))
)

export default middleware(effect)
