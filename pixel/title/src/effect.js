import echo from '@kuba/echo'
import magic from '@kuba/magic'
import middleware from '@kuba/middleware'

const effect = middleware((title) => (
  echo.on('markup:setTitle', ({ content }) => title[effect.onChange](content))
))

Object.assign(effect, {
  onChange: magic.effect_onChange
})

export default effect
