import * as settings from '@kuba/settings'

export default (schema) =>
  ({
    '@id': `#${schema.id}`,
    '@type': 'Product',
    additionalProperty: {
      '@id': '#propertyvalue'
    },
    brand: {
      '@id': '#brand'
    },
    description: schema.description,
    image: schema.image,
    mainEntityOfPage: {
      '@id': '#webpage',
      '@type': 'WebPage',
      breadcrumb: {
        '@id': '#breadcrumb'
      },
      description: schema.description,
      inLanguage: settings.app.language,
      isPartOf: {
        '@id': '#website'
      },
      name: schema.name,
      url: settings.app.url
    },
    material: schema.material,
    name: schema.name,
    size: schema.size
  })
