import h, { render } from '@rex/h'
import ga from './ga'
import schema from './schema.json'

ga('create', schema.id, 'auto')
ga('send', 'pageview')

render(document.head, <script src='https://www.google-analytics.com/analytics.js' async />)
