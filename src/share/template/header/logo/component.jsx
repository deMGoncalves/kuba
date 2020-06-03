import h from '@h'
import style from './style.css'

export default () =>
  <picture className={style.logo}>
    <source srcSet='https://dummyimage.com/120x60/000000/000000.png' media='(max-width: 469px)' />
    <source srcSet='https://dummyimage.com/60x60/000000/000000.png' media='(min-width: 470px) and (max-width: 589px)' />
    <source srcSet='https://dummyimage.com/180x60/000000/000000.png' media='(min-width: 590px)' />
    <img className={style.logo__img} loading='lazy' onClick={() => location.assign(location.origin)} alt='JRMod' />
  </picture>
