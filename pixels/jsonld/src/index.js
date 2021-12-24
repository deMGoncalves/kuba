import * as f from '@kuba/f'
import middleware from '@kuba/middleware'
import graph from './graph'
import render from './render'

export default (schema) =>
  middleware((entity) => render(f.push(graph, schema(entity))))
