import * as f from '@rex/f'

export default f.once((logo) =>
  ({
    '@id': '#logo',
    '@type': 'Organization',
    logo: logo.thumbnail,
    name: logo.name,
    url: logo.url
  })
)
