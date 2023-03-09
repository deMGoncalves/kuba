import echo from '@kuba/echo'

function setTitle (content) {
  echo.emit('markup:setTitle', { content })
}

export default setTitle
