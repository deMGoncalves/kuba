export default (shape) =>
  ({
    '@id': `#${shape.slug}`,
    '@type': 'Product',
    brand: {
      '@id': `#${shape.marca.slug}`,
      '@type': 'Brand',
      description: shape.marca.descricao,
      logo: shape.marca.logo,
      name: shape.marca.nome
    },
    description: shape.descricao,
    image: [
      shape.thumbnail
    ],
    name: shape.modelo
  })
