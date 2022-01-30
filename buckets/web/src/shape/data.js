import * as settings from '@kuba/settings'

export default (schema) =>
  ({
    '@id': `#${schema.id}`,
    '@type': 'Product',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Concave',
        value: schema.concave
      },
      {
        '@type': 'PropertyValue',
        name: 'Lixa',
        value: schema.lixa
      },
      {
        '@type': 'PropertyValue',
        name: 'Nose',
        value: schema.nose
      },
      {
        '@type': 'PropertyValue',
        name: 'Tail',
        value: schema.tail
      },
      {
        '@type': 'PropertyValue',
        name: 'Wheelbase',
        value: schema.wheelbase
      }
    ],
    brand: {
      '@id': `#${schema.brand.slug}`,
      '@type': 'Brand',
      description: schema.brand.descricao,
      logo: schema.brand.logo,
      name: schema.brand.nome
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
