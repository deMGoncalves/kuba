import h, { render } from '@rex/h'

export default () =>
  render(document.head, <meta property='og:site_name' content='TodoMVC - Helping you select an MV* framework' />)
