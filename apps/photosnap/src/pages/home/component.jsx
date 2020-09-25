import h, { Fragment } from '@rex/h'
import Header from '@rex/header'
import Footer from '@rex/footer'
import banners from './banners'
import cards from './cards'
import features from './features'
import style from './style.css'

export default () =>
  <main className={style.home}>
    <Header className={style.home__header} />
    {banners}
    {cards}
    {features}
    <Footer className={style.home__footer} />
  </main>
