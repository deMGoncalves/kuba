import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.kits}>
    <s.Container>
      <h2 className={style.kits__h2}>mod kits</h2>
      <div className={style.kits__departament}>
        <picture className={style.custom__picture}>
          <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/959x300/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/1200x200/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.custom__img} alt='custom' />
        </picture>
      </div>
      <div className={style.kits__categories}>
        <figure className={style.kits__figure}>
          <picture className={style.custom__picture}>
            <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
            <source srcSet='https://dummyimage.com/959x300/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
            <source srcSet='https://dummyimage.com/1200x200/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
            <img className={style.custom__img} alt='custom' />
          </picture>
          <figcaption className={style.kits__figcaption}>
            <p className={style.kits__p}>overdrive</p>
            <a className={style.kits__a}>ver mais</a>
          </figcaption>
        </figure>
        <figure className={style.kits__figure}>
          <picture className={style.custom__picture}>
            <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
            <source srcSet='https://dummyimage.com/959x300/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
            <source srcSet='https://dummyimage.com/1200x200/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
            <img className={style.custom__img} alt='custom' />
          </picture>
          <figcaption className={style.kits__figcaption}>
            <p className={style.kits__p}>overdrive</p>
            <a className={style.kits__a}>ver mais</a>
          </figcaption>
        </figure>
      </div>
    </s.Container>
  </section>
