import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.jumbotron}>
    <s.Container>
      <picture className={style.jumbotron__picture}>
        <source srcSet='https://dummyimage.com/747x600/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
        <source srcSet='https://dummyimage.com/939x500/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet='https://dummyimage.com/1200x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
        <img className={style.jumbotron__img} loading='lazy' alt='Aqui você encontra timbres e soluções' />
      </picture>
      <h1 className={style.jumbotron__h1}>aqui você encontra timbres e soluções</h1>
      <a className={style.jumbotron__a} href='#'>ver mais</a>
    </s.Container>
  </section>
