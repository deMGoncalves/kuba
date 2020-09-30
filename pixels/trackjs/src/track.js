import * as f from '@rex/f'

const trackJs = (token) =>
  (window._trackJs = { token })

export default f.background(trackJs)
