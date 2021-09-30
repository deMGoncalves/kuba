import * as f from '@kuba/f'

export default f.once(() =>
  ({
    '@id': '#collectionpage',
    '@type': 'CollectionPage',
    about: {
      '@id': '#itemlist'
    },
    mainEntityOfPage: {
      '@id': '#webpage'
    }
  })
)
