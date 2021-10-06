import '@kuba/tokens'
import '@kuba/reset'

import h, { Fragment, render } from '@kuba/h'
import text from '@kuba/text'

const params = { year: '2-digit', month: '2-digit', day: '2-digit' }
const date = new Intl.DateTimeFormat('en-US', params).format(new Date())

render(
  document.body,
  <Fragment>{date}</Fragment>
)
