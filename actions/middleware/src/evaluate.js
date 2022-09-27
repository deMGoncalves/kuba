import * as f from '@kuba/f'

export default f.cond(
  [f.has('get'), f.always('get')],
  [f.has('set'), f.always('set')],
  [f.has('value'), f.always('value')]
)
