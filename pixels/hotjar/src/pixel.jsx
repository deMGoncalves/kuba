import h, { render } from '@rex/h'
import agent from '@rex/agent'
import hj from './hj'
import schema from './schema.json'

agent.isUser && (
  window._hjSettings = {
    hjid: schema.id,
    hjsv: schema.sv
  },

  render(document.head, <script src={`https://static.hotjar.com/c/hotjar-${schema.id}.js?sv=${schema.sv}`} async />)
)

export default hj
