import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import banner from './banner'
import cards from './cards'
import style from './style.css'

export default () =>
  <main className={style.stories}>
    <ui.Header className={style.stories__header} />
    {banner}
    {cards}
    <ui.Footer className={style.stories__footer} />
  </main>
