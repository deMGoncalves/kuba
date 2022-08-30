import { params } from '@kuba/router'

export default [
  { page: 'home', title: 'Home' },
  { page: 'shapes.home', title: 'Shapes' },
  { page: 'shapes.origem', title: params.origem, params: { origem: params.origem } }
]
