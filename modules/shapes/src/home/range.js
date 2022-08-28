import * as f from '@kuba/f'

const page = f.dunder('page')

const range = (target) => ({
  page: page(target),
  size: 24
})

f.assign(range, {
  page
})

export default range
