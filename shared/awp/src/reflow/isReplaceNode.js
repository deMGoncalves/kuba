import * as f from '@rex/f'

export default f.compose(f.equal('replaceNode'), f.prop('data.type'))
