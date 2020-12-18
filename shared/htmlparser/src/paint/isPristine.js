import * as f from '@rex/f'

export default f.compose(f.not, f.has(f.magic('__element__')))
