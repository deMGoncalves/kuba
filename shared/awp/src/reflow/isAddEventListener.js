import * as f from '@rex/f'

export default f.compose(f.equal('addEventListener'), f.prop('data.type'))
