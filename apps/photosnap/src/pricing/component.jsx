import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import banner from './banner'
import style from './style.css'

export default () =>
  <main className={style.pricing}>
    <ui.Header className={style.pricing__header} />
    {banner}
    <ui.Tarja className={style.pricing__tarja} />
    <ui.Footer className={style.pricing__footer} />
  </main>
