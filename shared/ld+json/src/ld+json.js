import * as f from '@rex/f'
import hook from '@rex/hook'
import graph from './graph'
import render from './render'

export default (target) =>
  hook(f.once((page) => render(f.push(graph, target(page)))))
