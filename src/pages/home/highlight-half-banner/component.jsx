import h from '@h'
import * as s from '@share'
import style from './style.css'

import bannerL from './banner_1200x200.jpg'
import bannerM from './banner_939x300.jpg'
import bannerS from './banner_747x400.jpg'

export default () =>
  <section className={style.banner}>
    <s.Container>
      <h2 className={style.banner__h2}>produto confeccionado com primor e coração</h2>
      <picture className={style.banner__picture}>
        <source srcSet={bannerS} media='(max-width: 767px)' />
        <source srcSet={bannerM} media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet={bannerL} media='(min-width: 960px)' />
        <img className={style.banner__img} loading='lazy' alt='custom shop' />
      </picture>
      <s.Link className={style.banner__a}>ver mais</s.Link>
    </s.Container>
  </section>
