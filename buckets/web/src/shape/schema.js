import global from '@kuba/global'

export default () => (
  {
    breadcrumb: [
      { page: 'shapes', title: 'Home' },
      { page: 'marca', params: { marca: global.marca.slug }, title: global.marca.nome },
      { page: 'shape', params: { marca: global.marca.slug, shape: global.slug }, title: global.modelo }
    ]
  }
)
