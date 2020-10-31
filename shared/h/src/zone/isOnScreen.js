import * as f from '@rex/f'

export default (zone) =>
  f.lt(f.subtract(zone.__element__.getBoundingClientRect().top, window.innerHeight), window.innerHeight)
