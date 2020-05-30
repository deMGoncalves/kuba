import h from '@h'
import * as s from '@share'
import style from './style.css'

import bannerL from './banner_1200x400.jpg'
import bannerM from './banner_939x400.jpg'
import bannerS from './banner_747x400.jpg'

export default () =>
  <section className={style.souvenier}>
    <s.Container>
      <h2 className={style.souvenier__h2}>souveniers com a marca da família JRMod</h2>
      <picture className={style.souvenier__picture}>
        <source srcSet={bannerS} media='(max-width: 767px)' />
        <source srcSet={bannerM} media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet={bannerL} media='(min-width: 960px)' />
        <img className={style.souvenier__img} loading='lazy' alt='souvenier' />
      </picture>
      <s.Link className={style.souvenier__a} href='#'>ver mais</s.Link>
    </s.Container>
  </section>
