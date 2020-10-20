import h, { Repeat } from '@rex/h'
import * as ui from '@rex/kit'
import Hero from './hero'
import schema from './schema.json'
import Story from './story'
import style from './style.css'

export default () =>
  <main className={style.stories}>
    <ui.Header />
    <Hero />
    <Repeat iterator={schema} component={Story} />
    <ui.Footer />
  </main>
