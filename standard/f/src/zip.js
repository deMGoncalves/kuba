import curry from './curry'
import len from './len'
import map from './map'
import max from './max'
import repeat from './repeat'

const zip = (x, y) => (
  map(repeat(null, max(len(x), len(y))), (_, i) => [x[i], y[i]])
)

export default curry(zip)
