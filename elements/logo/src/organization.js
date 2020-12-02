import * as f from '@rex/f'

export default f.once((organization) =>
  ({
    '@id': '#organization',
    '@type': 'Organization',
    logo: organization.thumbnail,
    name: organization.name,
    url: organization.url
  })
)
