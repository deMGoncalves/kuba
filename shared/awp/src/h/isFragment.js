import * as f from '@rex/f'

export default (payload) =>
  f.and(
    f.not(f.has('tagName', payload)),
    f.not(f.has('textContent', payload)),
    f.has('children', payload)
  )
