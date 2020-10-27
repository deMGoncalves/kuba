import h, { render } from '@rex/h'
import agent from '@rex/agent'
import schema from './schema.json'
import trackJs from './track'

agent.isUser && (
  trackJs(schema.token),
  render(document.head, <script src='https://cdn.trackjs.com/releases/current/tracker.js' async />)
)

export default trackJs
