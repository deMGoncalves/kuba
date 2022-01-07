export default (marca) =>
  ({
    '@id': '#brand',
    '@type': 'Brand',
    description: marca.descricao,
    logo: marca.logo,
    name: marca.nome
  })
