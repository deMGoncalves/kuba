import h, { Fragment } from '@rex/h'
import * as f from '@rex/f'
import * as c from '@components'
import Banner from './banner'
import banners from './banners.json'
import style from './style.css'

export default () =>
  <main className={style.home}>
    <c.Header className={style.home__header} />
    <Banner { ...f.prop('[0]', banners) } color='inverse' />
    <Banner { ...f.prop('[1]', banners) } />
    <Banner { ...f.prop('[2]', banners) } direction='reverse' />
  </main>
