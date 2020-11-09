import * as f from '@rex/f'

export default (zone, handler) =>
  (window.addEventListener('scroll', (zone[f.magic('zone/handler')] = f.debounce(handler))), handler())
