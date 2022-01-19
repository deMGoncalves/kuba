import * as f from '@kuba/f'
import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const actions = (footer) => (
  echo.on('compare:add', () => footer[f.dunder.reflow]()),
  echo.on('compare:remove', () => footer[f.dunder.reflow]())
)

export default middleware(actions)
