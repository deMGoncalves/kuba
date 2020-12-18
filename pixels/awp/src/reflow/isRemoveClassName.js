import * as f from '@rex/f'

export default f.compose(f.equal('removeClassName'), f.prop('data.type'))
