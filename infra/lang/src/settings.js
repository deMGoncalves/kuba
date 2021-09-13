import * as f from '@kuba/f'
import * as settings from '@kuba/settings'

export default f.or(settings.lang, { fallback: 'pt-BR' })
