import h from '@rex/h'
import render from './render'

export default () =>
  render(<link rel='alternate' href={location.href} hrefLang='x-default' />)
