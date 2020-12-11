import * as f from '@rex/f'

export default f.compose(f.equal('removeEventListener'), f.prop('data.type'))
