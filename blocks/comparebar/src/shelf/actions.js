import * as f from '@kuba/f'
import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const actions = (shelf) => (
  echo.on('compare:add', () => shelf[f.dunder.reflow]()),
  echo.on('compare:remove', () => shelf[f.dunder.reflow]())
)

export default middleware(actions)
