import * as f from '@kuba/f'
import graph from './graph'
import middleware from '@kuba/middleware'
import render from './render'

export default (schema) =>
  middleware((entity) => render(f.push(graph, schema(entity))))
