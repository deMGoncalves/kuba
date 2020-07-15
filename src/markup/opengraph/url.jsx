import h from '@h'

export default () =>
  document.head.append(<meta property='og:url' content={location.href} />)
