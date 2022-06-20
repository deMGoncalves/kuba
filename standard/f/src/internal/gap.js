const gap = Symbol('__')

const isGap = (target) => (
  gap === target
)

export default gap
export {
  isGap
}
