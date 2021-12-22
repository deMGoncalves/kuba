import h, { Fragment, render } from '@kuba/h'
import agent from '@kuba/agent'

agent.isUser && (
  render(
    document.head,
    <>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Squada+One:wght@400;500;700&display=swap' />
    </>
  )
)
