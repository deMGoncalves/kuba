import * as f from '@rex/f'
import greaterNumberOfChildren from './greaterNumberOfChildren'
import reflow from './reflow'

export default (element, vElement) =>
  f.always(element)(
    f.forEach(
      f.map(
        f.repeat(null, greaterNumberOfChildren(element, vElement)),
        (_, i) =>
          [element.childNodes[i], vElement.childNodes[i], element]
      ),
      (args) => reflow(...args)))
