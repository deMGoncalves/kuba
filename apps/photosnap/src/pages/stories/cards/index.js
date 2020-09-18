import h from '@rex/h'
import * as f from '@rex/f'
import Component from './component'
import schema from './schema.json'

export default f.map(schema, (dto) => <Component {...dto} />)
