import h, { Repeat, Zone } from '@rex/h'
import * as ui from '@ui'
import Site from '@site'
import Hero from './hero'
import Feature from './feature'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <Site>
    <Hero />
    <Zone>
      <ul className={style.features__ul}>
        <Repeat iterator={schema} component={Feature} />
      </ul>
    </Zone>
    <ui.Tarja />
  </Site>
