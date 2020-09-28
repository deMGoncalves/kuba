import h, { render } from '@rex/h'
import * as f from '@rex/f'
import schema from './schema.json'
import trackJs from './track'

trackJs(schema.token)

f.idle(() =>
  render(document.head, <script src='https://cdn.trackjs.com/releases/current/tracker.js' async />))

export default trackJs
