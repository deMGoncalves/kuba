import curryOne from './curryOne'
import curryTwo from './curryTwo'
import curryThree from './curryThree'

export default (target) => {
  switch (target.length) {
    case 0:
      return target
    case 1:
      return curryOne(target)
    case 2:
      return curryTwo(target)
    default:
      return curryThree(target)
  }
}
