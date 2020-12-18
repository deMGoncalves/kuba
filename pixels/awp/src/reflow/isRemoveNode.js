import * as f from '@rex/f'

export default f.compose(f.equal('removeNode'), f.prop('data.type'))
