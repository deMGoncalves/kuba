import * as f from '@kuba/f'
import { push } from '@kuba/jsonld'
import * as settings from '@kuba/settings'

export default (shape) =>
  push({
    '@id': `#${shape.id}`,
    '@type': 'Product',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Concave',
        value: shape.concave
      },
      {
        '@type': 'PropertyValue',
        name: 'Lixa',
        value: shape.lixa
      },
      {
        '@type': 'PropertyValue',
        name: 'Nose',
        value: shape.nose
      },
      {
        '@type': 'PropertyValue',
        name: 'Tail',
        value: shape.tail
      },
      {
        '@type': 'PropertyValue',
        name: 'Wheelbase',
        value: shape.wheelbase.valor
      }
    ],
    brand: {
      '@id': `#${shape.marca.slug}`,
      '@type': 'Brand',
      description: shape.marca.descricao,
      logo: shape.marca.logo,
      name: shape.marca.nome
    },
    description: shape.descricao,
    image: shape.thumbnnail,
    mainEntityOfPage: {
      '@id': '#webpage',
      '@type': 'WebPage',
      breadcrumb: {
        '@id': '#breadcrumb'
      },
      description: shape.descricao,
      inLanguage: settings.app.language,
      isPartOf: {
        '@id': '#website'
      },
      name: shape.modelo,
      url: settings.app.url
    },
    material: f
      .from(shape.material)
      .pipe(f.or(f.__, []))
      .pipe(f.map(f.__, f.prop('valor')))
      .pipe(f.join(f.__, ', '))
      .done(),
    name: shape.modelo,
    size: `${shape.tamanho.valor}"`
  })
