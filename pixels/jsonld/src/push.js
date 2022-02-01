import * as f from '@kuba/f'
import graph from './graph'
import render from './render'

export default (data) =>
  render(f.push(graph, data))
