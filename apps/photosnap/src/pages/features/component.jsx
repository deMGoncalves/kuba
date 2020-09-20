import h, { Fragment } from '@rex/h'
import * as c from '@components'
import banner from './banner'
import items from './items'
import style from './style.css'

export default () =>
  <main className={style.features}>
    <c.Header className={style.features__header} />
    {banner}
    {items}
    <c.Tarja className={style.features__tarja} />
    <c.Footer className={style.features__footer} />
  </main>
