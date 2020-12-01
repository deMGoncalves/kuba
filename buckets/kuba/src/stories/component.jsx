import h, { Repeat, Zone } from '@rex/h'
import Site from '@site'
import Hero from './hero'
import Story from './story'
import schema from './schema.json'

export default () =>
  <Site>
    <Hero />
    <Zone>
      <Repeat iterator={schema} component={Story} />
    </Zone>
  </Site>
