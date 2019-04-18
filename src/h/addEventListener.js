import * as r from 'ramda'

const addEventListener = (element, event, listener) => {
  element[r.toLower(event)] = listener
}

export default r.curry(addEventListener)
