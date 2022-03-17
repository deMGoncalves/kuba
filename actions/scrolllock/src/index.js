import body from './body'
import echo from '@kuba/echo'

echo.on('overlayer:open', body.lock)
echo.on('overlayer:close', body.unlock)
