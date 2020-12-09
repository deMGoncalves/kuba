import * as f from '@rex/f'

export default f.compose(f.equal('setTextContent'), f.prop('data.type'))
