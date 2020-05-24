import h from '@h'

export default () =>
  <picture itemScope itemType='http://schema.org/Organization'>
    <source srcSet='ttps://dummyimage.com/60x60/f0f0f0/000.png' media='(max-width: 767px)' />
    <source srcSet='ttps://dummyimage.com/60x120/f0f0f0/000.png' media='(min-width: 768px) and (max-width: 959px)' />
    <source srcSet='ttps://dummyimage.com/60x120/f0f0f0/000.png' media='(min-width: 960px)' />
    <img alt='JRMod' itemProp='logo' />
    <meta itemProp='url' content='https://www.jrmod.net' />
    <meta itemProp='name' content='JRMod' />
  </picture>
