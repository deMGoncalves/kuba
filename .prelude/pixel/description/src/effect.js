import echo from '@kuba/echo'
import magic from '@kuba/magic'
import middleware from '@kuba/middleware'

const effect = middleware((description) => (
  echo.on('markup:setDescription', ({ content }) => description[effect.onChange](content))
))

Object.assign(effect, {
  onChange: magic.effect_onChange
})

export default effect
