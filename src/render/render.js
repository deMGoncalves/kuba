import stub from './stub'

const render = (element, Component) =>
  (document.querySelector(element) || stub).appenChild(<Component />)

export default render
