import * as f from '@kuba/f'
import hook from '@kuba/hook'
import graph from './graph'
import render from './render'

export default (structured) =>
  hook(f.once((target) => render(f.push(graph, structured(target)))))
