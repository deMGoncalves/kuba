import h, { Repeat } from '@rex/h'
import schema from './schema.json'
import Story from './story'

export default () =>
  <Repeat iterator={schema} component={Story} />
