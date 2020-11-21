import * as f from '@rex/f'

export default f.compose(f.test(/function/), f.typeOf)
