import h from '@kuba/h'
import * as f from '@kuba/f'
import paint from './paint'

export default {
  is (tag) {
    return f.equal(tag.type, 1)
  },

  execute (tag) {
    return h(tag.name, tag.props, ...f.map(tag.children, paint))
  }
}
