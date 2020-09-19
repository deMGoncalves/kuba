import h, { Fragment } from '@rex/h'
import * as c from '@components'
import banner from './banner'
import style from './style.css'

export default () =>
  <main className={style.pricing}>
    <c.Header className={style.pricing__header} />
    {banner}
    <c.Footer className={style.pricing__footer} />
  </main>
