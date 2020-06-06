import h from '@h'
import style from './style.css'

const bannerS = 'https://dummyimage.com/120x60/1a1a1a/fafafa&text=JRMod'
const bannerM = 'https://dummyimage.com/60x60/1a1a1a/fafafa&text=JRMod'
const bannerL = 'https://dummyimage.com/180x60/1a1a1a/fafafa&text=JRMod'

export default () =>
  <picture className={style.logo}>
    <source srcSet={bannerS} media='(max-width: 469px)' />
    <source srcSet={bannerM} media='(min-width: 470px) and (max-width: 589px)' />
    <source srcSet={bannerL} media='(min-width: 590px)' />
    <img className={style.logo__img} loading='lazy' onClick={() => location.assign(location.origin)} alt='JRMod' />
  </picture>
