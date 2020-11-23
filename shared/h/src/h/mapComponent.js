import * as f from '@rex/f'
import isComponent from './isComponent'

export default f.map(f.__, (nodeOrComponent) =>
  isComponent(nodeOrComponent) ? nodeOrComponent() : Promise.resolve(nodeOrComponent))
