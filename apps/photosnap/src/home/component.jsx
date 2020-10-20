import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import heros from './heros'
import stories from './stories'
import features from './features'
import style from './style.css'

export default () =>
  <main className={style.home}>
    <ui.Header className={style.home__header} />
    {heros}
    {stories}
    {features}
    <ui.Footer className={style.home__footer} />
  </main>
