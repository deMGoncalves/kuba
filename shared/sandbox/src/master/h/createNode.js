import * as f from '@rex/f'
import map from '@rex/sandbox/src/master/map'
import appendChildren from './appendChildren'
import setAttributes from './setAttributes'

export default (payload) =>
  map.set(
    payload['@unid'],
    f.compose(appendChildren(payload.children), setAttributes(payload.attributes))(document.createElement(payload.tagName))
  )
