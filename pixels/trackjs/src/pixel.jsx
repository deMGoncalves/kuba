import h, { render } from '@rex/h'
import * as f from '@rex/f'
import bot from '@rex/bot'
import schema from './schema.json'
import trackJs from './track'

trackJs(schema.token)

if (f.not(bot))
  f.idle(() =>
    render(document.head, <script src='https://cdn.trackjs.com/releases/current/tracker.js' async />))

export default trackJs
