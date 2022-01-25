import echo from '@kuba/echo'

export default (src) =>
  echo.emit('markup:setImage', { src })
