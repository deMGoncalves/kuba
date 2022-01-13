import global from '@kuba/global'

export default () => (
  {
    breadcrumb: [
      { page: 'shapes', title: 'Home' },
      { page: 'marcas', title: 'Marcas' },
      { page: 'marca', params: { marca: global.slug }, title: global.nome }
    ]
  }
)
