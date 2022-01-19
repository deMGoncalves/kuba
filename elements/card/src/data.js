export default (shape) =>
  ({
    '@id': `#${shape.slug}`,
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
        value: shape.wheelbase
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
    image: shape.thumbnail,
    material: shape.material,
    name: shape.modelo.valor,
    size: shape.tamanho
  })
