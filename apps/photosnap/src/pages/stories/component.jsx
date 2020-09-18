import h, { Fragment } from '@rex/h'
import * as c from '@components'
import banner from './banner'
import cards from './cards'
import style from './style.css'

export default () =>
  <main className={style.stories}>
    <c.Header className={style.stories__header} />
    {banner}
    {cards}
    <c.Footer className={style.stories__footer} />
  </main>
