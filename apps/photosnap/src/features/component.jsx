import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import Hero from './hero'
import items from './items'
import style from './style.css'

export default () =>
  <main className={style.features}>
    <ui.Header />
    <Hero />
    {items}
    <ui.Tarja />
    <ui.Footer />
  </main>
