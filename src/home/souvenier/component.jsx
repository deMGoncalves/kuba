import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.souvenier}>
    <s.Container className={style.souvenier__container}>
      <h2 className={style.souvenier__h2}>souvenier</h2>
      <div className={style.souvenier__div}>
        <picture className={style.souvenier__picture}>
          <source srcSet='https://dummyimage.com/767x200/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/959x200/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/1200x200/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.souvenier__img} alt='souvenier' />
        </picture>
        <a className={style.souvenier__a} href='#'>ver mais</a>
      </div>
      <div className={style.souvenier__div}>
        <picture className={style.souvenier__picture}>
          <source srcSet='https://dummyimage.com/767x200/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/959x200/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/1200x200/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.souvenier__img} alt='canecas' />
        </picture>
        <a className={style.souvenier__a} href='#'>canecas</a>
      </div>
      <div className={style.souvenier__div}>
        <picture className={style.souvenier__picture}>
          <source srcSet='https://dummyimage.com/767x200/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/959x200/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/1200x200/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.souvenier__img} alt='palhetas' />
        </picture>
        <a className={style.souvenier__a} href='#'>palhetas</a>
      </div>
      <div className={style.souvenier__div}>
        <picture className={style.souvenier__picture}>
          <source srcSet='https://dummyimage.com/767x200/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/959x200/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/1200x200/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.souvenier__img} alt='camisetas' />
        </picture>
        <a className={style.souvenier__a} href='#'>camisetas</a>
      </div>
    </s.Container>
  </section>
