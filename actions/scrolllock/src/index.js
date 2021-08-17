import echo from '@kuba/echo'
import Body from './body'

echo.on('overlayer:open', Body.lock)
echo.on('overlayer:close', Body.unlock)
