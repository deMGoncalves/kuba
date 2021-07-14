import h, { render } from '@kuba/h'
import agent from '@kuba/agent'
import './style.css'

agent.isUser && (
  render(
    document.head,
    <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' />
  )
)
