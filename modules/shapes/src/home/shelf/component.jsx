import * as f from '@kuba/f'
import h from '@kuba/h'
import Shelf from '@kuba/shelf'

const shapes = f.dunder('shapes')
const component = (shelf) =>
  <Shelf>
    {shapes(shelf)}
  </Shelf>

f.assign(component, {
  shapes: f.dunder.shapes
})

export default component
