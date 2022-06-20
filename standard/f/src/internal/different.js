import equal from './equal'
import not from './not'

const different = (x, y) => (
  not(equal(x, y))
)

export default different
