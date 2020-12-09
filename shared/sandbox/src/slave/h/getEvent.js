import * as f from '@rex/f'

export default f.compose(f.toLower, f.prop('[1]'), f.exec(/(on[a-z]+)/i))
