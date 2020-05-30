import h from '@h'
import * as s from '@share'
import style from './style.css'

import banner1200x500 from './banner_1200x500.jpg'
import banner939x500 from './banner_939x500.jpg'
import banner747x500 from './banner_747x500.jpg'
import banner529x500 from './banner_529x500.jpg'

export default () =>
  <section className={style.jumbotron}>
    <s.Container>
      <picture className={style.jumbotron__picture}>
        <source srcSet={banner529x500} media='(max-width: 549px)' />
        <source srcSet={banner747x500} media='(min-width: 470px) and (max-width: 767px)' />
        <source srcSet={banner939x500} media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet={banner1200x500} media='(min-width: 960px)' />
        <img className={style.jumbotron__img} loading='lazy' alt='Aqui você encontra timbres e soluções' />
      </picture>
      <h1 className={style.jumbotron__h1}>aqui você encontra timbres e soluções</h1>
      <s.Link className={style.jumbotron__a} href='#'>ver mais</s.Link>
    </s.Container>
  </section>
