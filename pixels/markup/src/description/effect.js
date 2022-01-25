import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const effect = (description) => (
  echo.on('markup:setDescription', ({ content }) => description.changeContent(content))
)

export default middleware(effect)
