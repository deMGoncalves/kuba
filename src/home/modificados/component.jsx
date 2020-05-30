import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.modificados}>
    <s.Container className={style.modificados__container}>
      <h2 className={style.modificados__h2}>pedais fiéis e cumprindo 100% de efetividade</h2>
      <div className={style.modificados__div}>
        <picture className={style.modificados__picture}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/939x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/1200x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='modificados' />
        </picture>
        <a className={style.modificados__a} href='#'>ver mais</a>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/393.3x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='distortion / overdrive / fuzz' />
        </picture>
        <a className={style.modificados__a} href='#'>distortion</a>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/393.3x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='compressor' />
        </picture>
        <a className={style.modificados__a} href='#'>compressor</a>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/393.3x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='equalizer' />
        </picture>
        <a className={style.modificados__a} href='#'>equalizer</a>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/393.3x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='preamp' />
        </picture>
        <a className={style.modificados__a} href='#'>preamp</a>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/393.3x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='expression' />
        </picture>
        <a className={style.modificados__a} href='#'>expression</a>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/393.3x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='modulation' />
        </picture>
        <a className={style.modificados__a} href='#'>modulation</a>
      </div>
    </s.Container>
  </section>
