import h, { Repeat, Zone } from '@rex/h'
import * as ui from '@ui'
import Hero from './hero'
import Story from './story'
import schema from './schema.json'

export default () =>
  <ui.Template>
    <Hero />
    <Zone>
      <Repeat iterator={schema} component={Story} />
    </Zone>
  </ui.Template>
