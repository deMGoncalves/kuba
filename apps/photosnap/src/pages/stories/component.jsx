import h, { Fragment } from '@rex/h'
import * as c from '@components'
import banner from './banner'
import style from './style.css'

export default () =>
  <main className={style.stories}>
    <c.Header className={style.stories__header} />
    {banner}
    <c.Footer className={style.stories__footer} />
  </main>
