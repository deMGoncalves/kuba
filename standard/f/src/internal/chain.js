import map from './map'

const chain = (...target) =>
  (...args) => (
    map(target, (x) => x(...args))
  )

export default chain
