import h from '@h'
import style from './style.css'

export default () =>
  <section className={style.jumbotron}>
    <div className={style.jumbotron__container}>
      <picture className={style.jumbotron__picture}>
        <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
        <source srcSet='https://dummyimage.com/959x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet='https://dummyimage.com/1200x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
        <img className={style.jumbotron__img} />
      </picture>
      <h1 className={style.jumbotron__title}>Aqui você encontra timbres e soluções</h1>
      <a className={style.jumbotron__link} href='#'>saiba mais</a>
    </div>
  </section>
