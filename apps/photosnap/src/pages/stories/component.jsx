import h, { Fragment } from '@rex/h'
import Header from '@rex/header'
import Footer from '@rex/footer'
import banner from './banner'
import cards from './cards'
import style from './style.css'

export default () =>
  <main className={style.stories}>
    <Header className={style.stories__header} />
    {banner}
    {cards}
    <Footer className={style.stories__footer} />
  </main>
