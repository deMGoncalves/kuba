import * as f from '@kuba/f'

export default f.compose(f.not, f.prop('isNode'))
