import * as f from '@rex/f'

export default f.once((logo) =>
  ({
    '@id': '#organization',
    '@type': 'Organization',
    logo: logo.src,
    name: logo.name,
    url: logo.url
  })
)
