import h, { render } from '@rex/h'

export default () =>
  render(document.head, <meta name='twitter:card' content='summary_large_image' />)
