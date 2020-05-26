import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.distortion}>
    <s.Container className={style.distortion__container}>
      <h2 className={style.distortion__h2}>efeitos</h2>
      <div className={style.distortion__div}>
        <picture className={style.distortion__picture}>
          <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/959x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/1200x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.distortion__img} alt='distortion' />
        </picture>
        <a className={style.distortion__a} href='#'>ver mais</a>
      </div>
      <div className={[style.distortion__div, style.half]}>
        <picture className={style.distortion__picture}>
          <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/465x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/387x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.distortion__img} alt='distortion / overdrive / fuzz' />
        </picture>
        <a className={style.distortion__a} href='#'>distortion</a>
      </div>
      <div className={[style.distortion__div, style.half]}>
        <picture className={style.distortion__picture}>
          <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/465x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/387x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.distortion__img} alt='compressor' />
        </picture>
        <a className={style.distortion__a} href='#'>compressor</a>
      </div>
      <div className={[style.distortion__div, style.half]}>
        <picture className={style.distortion__picture}>
          <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/465x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/387x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.distortion__img} alt='equalizer' />
        </picture>
        <a className={style.distortion__a} href='#'>equalizer</a>
      </div>
      <div className={[style.distortion__div, style.half]}>
        <picture className={style.distortion__picture}>
          <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/465x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/387x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.distortion__img} alt='preamp' />
        </picture>
        <a className={style.distortion__a} href='#'>preamp</a>
      </div>
      <div className={[style.distortion__div, style.half]}>
        <picture className={style.distortion__picture}>
          <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/465x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/387x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.distortion__img} alt='expression' />
        </picture>
        <a className={style.distortion__a} href='#'>expression</a>
      </div>
      <div className={[style.distortion__div, style.half]}>
        <picture className={style.distortion__picture}>
          <source srcSet='https://dummyimage.com/767x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/465x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/387x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.distortion__img} alt='modulation' />
        </picture>
        <a className={style.distortion__a} href='#'>modulation</a>
      </div>
    </s.Container>
  </section>
