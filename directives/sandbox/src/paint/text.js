import * as f from '@kuba/f'

export default {
  is (tag) {
    return f.equal(tag.type, 3)
  },

  execute (tag) {
    return tag.content
  }
}
