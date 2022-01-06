import global from '@kuba/global'

export default () => (
  {
    breadcrumb: [
      { page: 'shapes', title: 'Home' },
      { page: 'marca', title: global.marca.nome },
      { page: 'shape', title: global.modelo }
    ]
  }
)
