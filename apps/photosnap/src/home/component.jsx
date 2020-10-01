import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import banners from './banners'
import cards from './cards'
import features from './features'
import style from './style.css'

export default () =>
  <main className={style.home}>
    <ui.Header className={style.home__header} />
    {banners}
    {cards}
    {features}
    <ui.Footer className={style.home__footer} />
  </main>
