export default (className) =>
  className.value
    ? className.target.setAttribute('class', className.value)
    : className.target.removeAttribute('class')
