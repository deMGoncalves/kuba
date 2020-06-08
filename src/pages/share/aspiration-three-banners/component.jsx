import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

const bannerS = 'https://dummyimage.com/747x500/1a1a1a/1a1a1a'
const bannerM = 'https://dummyimage.com/939x400/1a1a1a/1a1a1a'
const bannerL = 'https://dummyimage.com/593x400/1a1a1a/1a1a1a'

const halfBannerS = 'https://dummyimage.com/368x500/1a1a1a/1a1a1a'
const halfBannerM = 'https://dummyimage.com/464x400/1a1a1a/1a1a1a'
const halfBannerL = 'https://dummyimage.com/293x400/1a1a1a/1a1a1a'

export default () =>
  <s.Module>
    <s.Container className={style.banner__container}>
      <s.Title>separamos algumas tendências para você</s.Title>
      <div className={style.banner__div}>
        <s.Image className={style.banner__image}>
          <source srcSet={bannerS} media='(max-width: 767px)' />
          <source srcSet={bannerM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={bannerL} media='(min-width: 960px)' />
        </s.Image>
        <s.Link className={style.banner__link} href='#'>ver mais</s.Link>
      </div>
      <div className={[style.banner__div, style.half]}>
        <s.Image className={[style.banner__image, style.half]}>
          <source srcSet={halfBannerS} media='(max-width: 767px)' />
          <source srcSet={halfBannerM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={halfBannerL} media='(min-width: 960px)' />
        </s.Image>
        <s.Link className={style.banner__link} href='#'>ver mais</s.Link>
      </div>
      <div className={[style.banner__div, style.half]}>
        <s.Image className={[style.banner__image, style.half]}>
          <source srcSet={halfBannerS} media='(max-width: 767px)' />
          <source srcSet={halfBannerM} media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet={halfBannerL} media='(min-width: 960px)' />
        </s.Image>
        <s.Link className={style.banner__link} href='#'>ver mais</s.Link>
      </div>
    </s.Container>
  </s.Module>
