import h from '@kuba/h'
import render from './render'

export default () =>
  render(<link rel='alternate' href={`${location.protocol}//${location.host}${location.pathname}`} hrefLang='x-default' />)
