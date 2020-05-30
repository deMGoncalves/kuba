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

import equalizerL from './equalizer_393x400.jpg'
import equalizerM from './equalizer_464x400.jpg'
import equalizerS from './equalizer_747x500.jpg'

import preampL from './preamp_393x400.jpg'
import preampM from './preamp_464x400.jpg'
import preampS from './preamp_747x500.jpg'

import expressionL from './expression_393x400.jpg'
import expressionM from './expression_464x400.jpg'
import expressionS from './expression_747x500.jpg'

import modulationL from './modulation_393x400.jpg'
import modulationM from './modulation_464x400.jpg'
import modulationS from './modulation_747x500.jpg'

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
          <source srcSet={equalizerS} media='(max-width: 767px)' />
          <source srcSet={equalizerM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={equalizerL} media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='equalizer' />
        </picture>
        <s.Link className={style.modificados__a} href='#'>equalizer</s.Link>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet={preampS} media='(max-width: 767px)' />
          <source srcSet={preampM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={preampL} media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='preamp' />
        </picture>
        <s.Link className={style.modificados__a} href='#'>preamp</s.Link>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet={expressionS} media='(max-width: 767px)' />
          <source srcSet={expressionM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={expressionL} media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='expression' />
        </picture>
        <s.Link className={style.modificados__a} href='#'>expression</s.Link>
      </div>
      <div className={[style.modificados__div, style.half]}>
        <picture className={[style.modificados__picture, style.half]}>
          <source srcSet={modulationS} media='(max-width: 767px)' />
          <source srcSet={modulationM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={modulationL} media='(min-width: 960px)' />
          <img className={style.modificados__img} loading='lazy' alt='modulation' />
        </picture>
        <s.Link className={style.modificados__a} href='#'>modulation</s.Link>
      </div>
    </s.Container>
  </section>
