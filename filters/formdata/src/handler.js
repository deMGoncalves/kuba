import * as f from '@kuba/f'

export default (listener) =>
  (e) => (
    e.preventDefault(),
    listener(f.pairs([...new FormData(e.target)]))
  )
