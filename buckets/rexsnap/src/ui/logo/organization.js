import * as f from '@rex/f'

export default f.once((logo) =>
  ({
    '@id': `${logo.url}#logo`,
    '@type': 'Organization',
    logo: logo.src,
    name: logo.name,
    url: logo.url
  })
)
