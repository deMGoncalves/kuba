import * as f from '@rex/f'
import fallback from './fallback'

export default window.requestIdleCallback = f.or(window.requestIdleCallback, fallback)
