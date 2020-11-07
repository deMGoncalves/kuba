import * as f from '@rex/f'

export default f.once((site) =>
  ({
    '@id': '#site',
    '@type': 'WebSite',
    name: site.name,
    publisher: {
      '@id': '#organization'
    },
    url: site.url
  })
)
