import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (zoom) => (
  useEffect(() => zoom.change(
    global.shape.thumbnail
  ))
)

export default middleware(effect)
