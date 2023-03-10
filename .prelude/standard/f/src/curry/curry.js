import oneParameter from './oneParameter'
import threeParameters from './threeParameters'
import throwParameters from './throwParameters'
import twoParameters from './twoParameters'
import zeroParameter from './zeroParameter'

const evaluates = [
  zeroParameter,
  oneParameter,
  twoParameters,
  threeParameters,
  throwParameters
]

export default (functionRef) => (
  evaluates.find((evaluate) => evaluate.is(functionRef))(functionRef)
)
