import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const effect = (title) => (
  echo.on('markup:setTitle', ({ textContent }) => title.changeTextContent(textContent))
)

export default middleware(effect)
