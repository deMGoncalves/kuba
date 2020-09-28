import h, { render } from '@rex/h'
import * as f from '@rex/f'
import hj from './hj'
import schema from './schema.json'

window._hjSettings = {
  hjid: schema.id,
  hjsv: schema.sv
}

f.idle(() =>
  render(document.head, <script src={`https://static.hotjar.com/c/hotjar-${schema.id}.js?sv=${schema.sv}`} async />))

export default hj
