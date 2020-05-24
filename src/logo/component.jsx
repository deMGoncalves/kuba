import h from '@h'
import style from './style.css'

export default (attr) =>
  <picture className={[style.logo, attr.className]} itemScope itemType='http://schema.org/Organization'>
    <source srcSet='https://dummyimage.com/120x40/1A1A1A/FAFAFA.png' media='(max-width: 469px)' />
    <source srcSet='https://dummyimage.com/60x60/1A1A1A/FAFAFA.png' media='(min-width: 470px) and (max-width: 589px)' />
    <source srcSet='https://dummyimage.com/180x60/1A1A1A/FAFAFA.png' media='(min-width: 590px)' />
    <img className='logo__img' onClick={() => location.assign(location.origin)} alt='JRMod' itemProp='logo' />
    <meta itemProp='url' content='https://www.jrmod.net' />
    <meta itemProp='name' content='JRMod' />
  </picture>
