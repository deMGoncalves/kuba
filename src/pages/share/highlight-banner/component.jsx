import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

const bannerXS = 'https://dummyimage.com/529x500/1a1a1a/1a1a1a'
const bannerS = 'https://dummyimage.com/747x500/1a1a1a/1a1a1a'
const bannerM = 'https://dummyimage.com/939x500/1a1a1a/1a1a1a'
const bannerL = 'https://dummyimage.com/529x400/1a1a1a/1a1a1a'

export default () =>
  <section className={style.banner}>
    <s.Container>
      <s.Image className={style.banner__image} alt='aqui você encontra trimbres e soluções'>
        <source srcSet={bannerXS} media='(max-width: 549px)' />
        <source srcSet={bannerS} media='(min-width: 470px) and (max-width: 767px)' />
        <source srcSet={bannerM} media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet={bannerL} media='(min-width: 960px)' />
      </s.Image>
      <h1 className={style.banner__h1}>aqui você encontra timbres e soluções</h1>
      <s.Link className={style.banner__link} href='#'>ver mais</s.Link>
    </s.Container>
  </section>
