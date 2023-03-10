import echo from '@kuba/echo'

function setDescription (content) {
  echo.emit('markup:setDescription', { content })
}

export default setDescription
