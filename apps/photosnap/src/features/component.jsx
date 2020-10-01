import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import banner from './banner'
import items from './items'
import style from './style.css'

export default () =>
  <main className={style.features}>
    <ui.Header className={style.features__header} />
    {banner}
    {items}
    <ui.Tarja className={style.features__tarja} />
    <ui.Footer className={style.features__footer} />
  </main>
