import * as f from '@kuba/f'
import schema from './schema'

export default function (key, value = '', descriptor = {}) {
  const domain = f.or(descriptor.domain, schema.domain)
  const expires = f.or(descriptor.expires, schema.expirespath)
  const path = f.or(descriptor.path, schema.path)

  document.cookie = `${key}=${value};domain=${domain};expires=${expires};path=${path}`
}
