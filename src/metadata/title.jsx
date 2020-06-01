import h from '@h'

export default (page) =>
  document.head.appendChild(<title>{ page.title }</title>)
