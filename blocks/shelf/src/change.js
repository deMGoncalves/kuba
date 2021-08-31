import echo from '@kuba/echo'
import hook from '@kuba/hook'

export default hook(echo.on('filter:change'))
