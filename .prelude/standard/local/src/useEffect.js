import echo from '@kuba/echo'

function useEffect(functionRef, key) {
  echo.on(`local:${key}`, functionRef)
}

export default useEffect
