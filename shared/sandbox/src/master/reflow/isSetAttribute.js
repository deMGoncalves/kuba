import * as f from '@rex/f'

export default f.compose(f.equal('setAttribute'), f.prop('data.type'))
