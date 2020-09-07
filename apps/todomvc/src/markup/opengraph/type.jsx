import h, { render } from '@rex/h'

export default () =>
  render(document.head, <meta property='og:type' content='website' />)
