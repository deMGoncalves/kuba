import h from '@h'
import * as s from '@share'
import style from './style.css'

import bannerL from './banner_1200x500.jpg'
import bannerM from './banner_939x500.jpg'
import bannerS from './banner_747x500.jpg'
import bannerXS from './banner_529x500.jpg'

export default () =>
  <section className={style.banner}>
    <s.Container>
      <picture className={style.banner__picture}>
        <source srcSet={bannerXS} media='(max-width: 549px)' />
        <source srcSet={bannerS} media='(min-width: 470px) and (max-width: 767px)' />
        <source srcSet={bannerM} media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet={bannerL} media='(min-width: 960px)' />
        <img className={style.banner__img} loading='lazy' alt='Aqui você encontra timbres e soluções' />
      </picture>
      <h1 className={style.banner__h1}>aqui você encontra timbres e soluções</h1>
      <s.Link className={style.banner__a} href='#'>ver mais</s.Link>
    </s.Container>
  </section>
