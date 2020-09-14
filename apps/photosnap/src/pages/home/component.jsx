import h, { Fragment } from '@rex/h'
import * as c from '@components'
import banners from './banners'
import cards from './cards'
import features from './features'
import style from './style.css'

export default () =>
  <main className={style.home}>
    <c.Header />
    {banners}
    {cards}
    {features}
  </main>
