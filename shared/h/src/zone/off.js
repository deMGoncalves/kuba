import * as f from '@rex/f'

export default (zone) =>
  window.removeEventListener('scroll', zone[f.magic('zone/handler')])
