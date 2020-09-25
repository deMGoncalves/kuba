import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import Header from '@rex/header'
import Footer from '@rex/footer'
import banner from './banner'
import style from './style.css'

export default () =>
  <main className={style.pricing}>
    <Header className={style.pricing__header} />
    {banner}
    <ui.Tarja className={style.pricing__tarja} />
    <Footer className={style.pricing__footer} />
  </main>
