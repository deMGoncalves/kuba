import * as f from '@rex/f'
import defineComponent from './defineComponent'
import schema from './schema.json'

f.forEach(schema, defineComponent)
