import h from '@h'
import * as s from '@share'
import style from './style.css'

import bannerL from './banner_1200x400.jpg'
import bannerM from './banner_939x400.jpg'
import bannerS from './banner_747x500.jpg'

import distortionL from './distortion_393x400.jpg'
import distortionM from './distortion_464x400.jpg'
import distortionS from './distortion_747x500.jpg'

import compressorL from './compressor_393x400.jpg'
import compressorM from './compressor_464x400.jpg'
import compressorS from './compressor_747x500.jpg'

export default () =>
  <section className={style.modificados}>
    <s.Container className={style.modificados__container}>
      <h2 className={style.modificados__h2}>pedais fiéis e cumprindo 100% de efetividade</h2>
      <div className={style.modificados__div}>
        <picture className={style.modificados__picture}>
          <source srcSet={bannerS} media='(max-width: 767px)' />
          <source srcSet={bannerM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={bannerL} media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='modificados' />
        </picture>
        <s.Link className={style.modificados__a} href='#'>ver mais</s.Link>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet={distortionS} media='(max-width: 767px)' />
          <source srcSet={distortionM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={distortionL} media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='distortion / overdrive / fuzz' />
        </picture>
        <s.Link className={style.modificados__a} href='#'>distortion</s.Link>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet={compressorS} media='(max-width: 767px)' />
          <source srcSet={compressorM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={compressorL} media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='compressor' />
        </picture>
        <s.Link className={style.modificados__a} href='#'>compressor</s.Link>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/393.3x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='equalizer' />
        </picture>
        <s.Link className={style.modificados__a} href='#'>equalizer</s.Link>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/393.3x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='preamp' />
        </picture>
        <s.Link className={style.modificados__a} href='#'>preamp</s.Link>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/393.3x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='expression' />
        </picture>
        <s.Link className={style.modificados__a} href='#'>expression</s.Link>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/393.3x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='modulation' />
        </picture>
        <s.Link className={style.modificados__a} href='#'>modulation</s.Link>
      </div>
    </s.Container>
  </section>
