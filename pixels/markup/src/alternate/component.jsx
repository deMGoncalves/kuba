import h from '@kuba/h'

export default (alternate) =>
  <link rel='alternate' href={alternate.href} hrefLang={alternate.lang} />
