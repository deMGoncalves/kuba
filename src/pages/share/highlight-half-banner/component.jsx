import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

const bannerS = 'https://dummyimage.com/747x400/1a1a1a/1a1a1a'
const bannerM = 'https://dummyimage.com/939x300/1a1a1a/1a1a1a'
const bannerL = 'https://dummyimage.com/1200x200/1a1a1a/1a1a1a'

export default () =>
  <section className={style.banner}>
    <s.Container>
      <s.Title>produto confeccionado com primor e coração</s.Title>
      <s.Image className={style.banner__image}>
        <source srcSet={bannerS} media='(max-width: 767px)' />
        <source srcSet={bannerM} media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet={bannerL} media='(min-width: 960px)' />
      </s.Image>
      <s.Link className={style.banner__link}>ver mais</s.Link>
    </s.Container>
  </section>
