import * as f from '@kuba/f'
import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const onMore = f.dunder.onMore

const actions = middleware((target) =>
  echo.on('shapes:more', () => target[onMore]())
)

f.assign(actions, {
  onMore
})

export default actions
