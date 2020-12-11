import * as f from '@rex/f'

export default f.compose(f.equal('removeAttribute'), f.prop('data.type'))
