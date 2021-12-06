const gap = Symbol('__')
const isGap = (value) =>
  gap === value

export default gap
export {
  isGap
}
