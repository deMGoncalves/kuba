import h, { Fragment, Repeat } from '@rex/h'
import * as ui from '@rex/kit'
import Hero from './hero'
import Feature from './feature'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <main className={style.features}>
    <ui.Header />
    <Hero />
    <ul className={style.features__ul}>
      <Repeat iterator={schema} component={Feature} />
    </ul>
    <ui.Tarja />
    <ui.Footer />
  </main>
