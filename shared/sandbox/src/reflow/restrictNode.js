import * as f from '@rex/f'
import restrictAttributes from './restrictAttributes'
import restrictChildren from './restrictChildren'

export default f.chain(restrictAttributes, restrictChildren)
