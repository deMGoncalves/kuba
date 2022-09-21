import * as f from '@kuba/f'
import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const { reflow } = f.dunder

const actions = (shelf) => (
  echo.on('compare:add', () => shelf[reflow]()),
  echo.on('compare:remove', () => shelf[reflow]())
)

export default middleware(actions)
