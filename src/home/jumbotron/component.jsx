import h from '@h'
import style from './style'

export default () =>
  <section className={style.jumbotron}>
    <div className='jumbotron__container'>
      <picture className='jumbotron__picture'>
        <source srcSet='https://dummyimage.com/767x400/1A1A1A/FAFAFA.png' media='(max-width: 767px)' />
        <source srcSet='https://dummyimage.com/959x400/1A1A1A/FAFAFA.png' media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet='https://dummyimage.com/1200x400/1A1A1A/FAFAFA.png' media='(min-width: 960px)' />
        <img className='jumbotron__img' />
      </picture>
      <h1 className='jumbotron__title'>Aqui você encontra timbres e soluções</h1>
      <a className='jumbotron__link' href='#'>saiba mais</a>
    </div>
  </section>
