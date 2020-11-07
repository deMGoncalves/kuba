import h, { render } from '@rex/h'

export default () =>
  render(document.head, <link rel='alternate' href={location.href} hrefLang='x-default' />)
