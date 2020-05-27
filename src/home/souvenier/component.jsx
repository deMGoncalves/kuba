import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.souvenier}>
    <s.Container>
      <h2 className={style.souvenier__h2}>souvenier</h2>
      <picture className={style.souvenier__picture}>
        <source srcSet='https://dummyimage.com/767x200/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
        <source srcSet='https://dummyimage.com/959x300/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet='https://dummyimage.com/1200x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
        <img className={style.souvenier__img} alt='souvenier' />
      </picture>
      <a className={style.souvenier__a} href='#'>ver mais</a>
    </s.Container>
  </section>
