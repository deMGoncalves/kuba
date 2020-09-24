import h, { render } from '@rex/h'
import schema from './schema.json'
import './hj'

window._hjSettings = {
  hjid: schema.id,
  hjsv: schema.sv
}

window.addEventListener('DOMContentLoaded', () =>
  render(document.head, <script src={`https://static.hotjar.com/c/hotjar-${schema.id}.js?sv=${schema.sv}`} async />))
