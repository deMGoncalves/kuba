import random from './random'

const guid = () => (
  random().toString?.(32)
)

export default guid
