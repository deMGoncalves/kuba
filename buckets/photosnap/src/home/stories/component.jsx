import h, { Repeat, Zone } from '@rex/h'
import schema from './schema.json'
import Story from './story'

export default () =>
  <Zone>
    <Repeat iterator={schema} component={Story} />
  </Zone>
