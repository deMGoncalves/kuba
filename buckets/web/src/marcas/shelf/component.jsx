import h from '@kuba/h'
import Shelf from '@kuba/shelf'
import style from './style'

export default (shelf) =>
  <Shelf clasName={style.shelf}>
    {shelf.marcas}
  </Shelf>
