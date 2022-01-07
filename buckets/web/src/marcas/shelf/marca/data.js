export default (marca) =>
  ({
    '@id': `#${marca.slug}`,
    '@type': 'Brand',
    description: marca.descricao,
    logo: marca.logo,
    name: marca.nome
  })
