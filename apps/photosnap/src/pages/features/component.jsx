import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import Header from '@rex/header'
import Footer from '@rex/footer'
import banner from './banner'
import items from './items'
import style from './style.css'

export default () =>
  <main className={style.features}>
    <Header className={style.features__header} />
    {banner}
    {items}
    <ui.Tarja className={style.features__tarja} />
    <Footer className={style.features__footer} />
  </main>
