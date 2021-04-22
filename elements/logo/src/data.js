import * as f from '@kuba/f'

export default f.once((logo) =>
  ({
    '@id': '#organization',
    '@type': 'Organization',
    logo: logo.url,
    name: logo.name,
    url: logo.href
  })
)
