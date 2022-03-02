import * as f from '@kuba/f'
import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const onFilter = f.dunder.onFilter
const onMore = f.dunder.onMore

const actions = middleware((target) => (
  echo.on('filter:change', ({ key, value }) => target[onFilter](key, value)),
  echo.on('shapes:more', () => target[onMore]())
))

f.assign(actions, {
  onFilter,
  onMore
})

export default actions
