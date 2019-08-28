const render = (element) =>
  (Target) =>
    () => document.querySelector(element).appenChild(<Target />)

export default render
