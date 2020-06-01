import h from '@h'

export default (page) =>
  document.head.appendChild(<link href={page.canonical} rel='canonical' />)
