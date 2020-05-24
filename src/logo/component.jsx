import h from '@h'

export default (attr) =>
  <picture className={['logo', attr.className]} itemScope itemType='http://schema.org/Organization'>
    <source srcSet='https://dummyimage.com/60x60/f0f0f0/000.png' media='(max-width: 767px)' />
    <source srcSet='https://dummyimage.com/120x60/f0f0f0/000.png' media='(min-width: 768px) and (max-width: 959px)' />
    <source srcSet='https://dummyimage.com/120x60/f0f0f0/000.png' media='(min-width: 960px)' />
    <img className='logo__img' alt='JRMod' itemProp='logo' />
    <meta itemProp='url' content='https://www.jrmod.net' />
    <meta itemProp='name' content='JRMod' />
  </picture>
