import h, { Repeat, Zone } from '@rex/h'
import Hero from './hero'
import Story from './story'
import Template from '@template'
import schema from './schema.json'

export default () =>
  <Template>
    <Hero />
    <Zone>
      <Repeat iterator={schema} component={Story} />
    </Zone>
  </Template>
