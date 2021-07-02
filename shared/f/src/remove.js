import curry from './curry'
import indexOf from './indexOf'
import splice from './splice'

const remove = (array, x) =>
  splice(array, indexOf(array, x), 1)

export default curry(remove)
