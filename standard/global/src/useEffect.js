import channel from './channel'
import echo from '@kuba/echo'

function useEffect (funcitonRef, keys) {
  keys
    ? keys.forEach((key) => echo.on(`${channel}.${key}`, funcitonRef))
    : echo.on(channel, funcitonRef)
}

export default useEffect
