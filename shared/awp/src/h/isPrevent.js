import * as f from '@rex/f'

export default f.compose(f.equal(f.T()), f.prop('prevent'))
