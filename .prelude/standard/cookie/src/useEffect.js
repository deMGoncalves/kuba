import echo from '@kuba/echo'

function useEffect(functionRef, key) {
  echo.on(`cookie:${key}`, functionRef)
}

export default useEffect
