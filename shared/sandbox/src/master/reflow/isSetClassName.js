import * as f from '@rex/f'

export default f.compose(f.equal('setClassName'), f.prop('data.type'))
