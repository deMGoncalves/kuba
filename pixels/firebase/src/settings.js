import * as f from '@kuba/f'

export default f.or(f.prop('__settings.firebase', window), {})
