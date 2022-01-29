import h, { Fragment } from '@kuba/h'
import Shelf from '@kuba/shelf'

export default (shelf) =>
  <>
    <Shelf>
      {shelf.shapes}
    </Shelf>
  </>
