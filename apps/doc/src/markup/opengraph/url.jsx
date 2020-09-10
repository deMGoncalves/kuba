import h from '@rex/h'

export default () =>
  document.head.append(<meta property='og:url' content={location.href} />)
