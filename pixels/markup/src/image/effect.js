import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const effect = (image) => (
  echo.on('markup:setImage', ({ src }) => image.changeContent(src))
)

export default middleware(effect)
