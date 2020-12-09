import * as f from '@rex/f'
import execute from './execute'
import reflow from '@rex/sandbox/src/slave/reflow'

export default (state, component, children) =>
  () =>
    reflow(state[f.magic('__element__')], execute(state, component, children))
