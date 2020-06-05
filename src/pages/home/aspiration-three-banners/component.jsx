import h from '@h'
import * as s from '@share'
import style from './style.css'

import bannerL from './banner_593x400.jpg'
import bannerM from './banner_939x400.jpg'
import bannerS from './banner_747x500.jpg'

import overdriveL from './overdrive_293x400.jpg'
import overdriveM from './overdrive_464x400.jpg'
import overdriveS from './overdrive_747x500.jpg'

import distortionL from './distortion_293x400.jpg'
import distortionM from './distortion_464x400.jpg'
import distortionS from './distortion_747x500.jpg'

export default () =>
  <section className={style.banner}>
    <s.Container className={style.banner__container}>
      <h2 className={style.banner__h2}>parceria com os grandes representantes globais</h2>
      <div className={style.banner__div}>
        <picture className={style.banner__picture}>
          <source srcSet={bannerS} media='(max-width: 767px)' />
          <source srcSet={bannerM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={bannerL} media='(min-width: 960px)' />
          <img className={style.banner__img} loading='lazy' alt='mod kits' />
        </picture>
        <s.Link className={style.banner__a} href='#'>ver mais</s.Link>
      </div>
      <div className={[style.banner__div, style.half]}>
        <picture className={[style.banner__picture, style.half]}>
          <source srcSet={overdriveS} media='(max-width: 767px)' />
          <source srcSet={overdriveM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={overdriveL} media='(min-width: 960px)' />
          <img className={style.banner__img} loading='lazy' alt='overdrive' />
        </picture>
      </div>
      <div className={[style.banner__div, style.half]}>
        <picture className={[style.banner__picture, style.half]}>
          <source srcSet={distortionS} media='(max-width: 767px)' />
          <source srcSet={distortionM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={distortionL} media='(min-width: 960px)' />
          <img className={style.banner__img} loading='lazy' alt='distortion' />
        </picture>
      </div>
    </s.Container>
  </section>
