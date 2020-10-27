import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import Heros from './heros'
import Stories from './stories'
import Features from './features'
import style from './style.css'

export default () =>
  <main className={style.home}>
    <ui.Header />
    <Heros />
    <Stories />
    <Features />
    <ui.Footer />
  </main>
