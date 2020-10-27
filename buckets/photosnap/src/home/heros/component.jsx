import h, { Repeat } from '@rex/h'
import Hero from './hero'
import schema from './schema.json'

export default () =>
  <Repeat iterator={schema} component={Hero} />
