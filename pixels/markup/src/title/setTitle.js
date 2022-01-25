import echo from '@kuba/echo'

export default (textContent) =>
  echo.emit('markup:setTitle', { textContent })
