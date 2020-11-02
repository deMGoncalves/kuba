import h, { Repeat, Zone } from '@rex/h'
import * as ui from '@rex/kit'
import Hero from './hero'
import Feature from './feature'
import Template from '@template'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <Template>
    <Hero />
    <Zone>
      <ul className={style.features__ul}>
        <Repeat iterator={schema} component={Feature} />
      </ul>
    </Zone>
    <ui.Tarja />
  </Template>
