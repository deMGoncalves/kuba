import h, { render } from '@rex/h'
import * as f from '@rex/f'
import ga from './ga'
import schema from './schema.json'

ga('create', schema.id, 'auto')
ga('send', 'pageview')

f.idle(() =>
  render(document.head, <script src='https://www.google-analytics.com/analytics.js' async />))

export default ga
