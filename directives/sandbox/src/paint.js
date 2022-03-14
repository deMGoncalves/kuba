import h, { Fragment } from '@kuba/h'
import * as f from '@kuba/f'

const paint = function (tag) {
  if (f.equal(tag.type, 1)) return h(tag.name, tag.props, ...f.map(tag.children, paint))
  if (f.equal(tag.type, 3)) return tag.content
  if (f.equal(tag.type, 11)) return h(Fragment, {}, ...f.map(tag.children, paint))
}

export default paint
