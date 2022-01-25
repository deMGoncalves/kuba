import echo from '@kuba/echo'

export default (content) =>
  echo.emit('markup:setDescription', { content })
