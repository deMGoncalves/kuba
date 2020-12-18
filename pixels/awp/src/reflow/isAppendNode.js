import * as f from '@rex/f'

export default f.compose(f.equal('appendNode'), f.prop('data.type'))
