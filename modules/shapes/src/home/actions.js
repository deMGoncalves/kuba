import * as f from '@kuba/f'
import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const { onFilter, onMore } = f.dunder

const actions = middleware((target) => (
  echo.on('filter:change', ({ key, value }) => target[onFilter](key, value)),
  echo.on('shapes:more', () => target[onMore]())
))

f.assign(actions, {
  onFilter,
  onMore
})

export default actions
