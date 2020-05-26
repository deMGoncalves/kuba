import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.kits}>
    <s.Container className={style.kits__container}>
      <h2 className={style.kits__h2}>mod kits</h2>
      <div className={style.kits__div}>
        <picture className={style.kits__picture}>
          <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/959x300/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/1200x200/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.kits__img} alt='mod kits' />
        </picture>
        <a className={style.kits__a} href='#'>ver mais</a>
      </div>
      <div className={[style.kits__div, style.half]}>
        <picture className={style.kits__picture}>
          <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/959x300/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/1200x200/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.kits__img} alt='overdrive' />
        </picture>
        <a className={style.kits__a} href='#'>overdrive</a>
      </div>
      <div className={[style.kits__div, style.half]}>
        <picture className={style.kits__picture}>
          <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/959x300/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/1200x200/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.kits__img} alt='distortion' />
        </picture>
        <a className={style.kits__a} href='#'>distortion</a>
      </div>
    </s.Container>
  </section>
