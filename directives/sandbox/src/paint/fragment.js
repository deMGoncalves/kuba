import * as f from '@kuba/f'
import h, { Fragment } from '@kuba/h'
import paint from './paint'

export default {
  is (tag) {
    return f.equal(tag.type, 11)
  },

  execute (tag) {
    return h(Fragment, {}, ...f.map(tag.children, paint))
  }
}
