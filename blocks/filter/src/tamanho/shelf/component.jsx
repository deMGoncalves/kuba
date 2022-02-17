import h from '@kuba/h'
import container from '@kuba/container'
import style from './style'

export default (shelf) =>
  <container.Main uid='shelf' className={[style.shelf, shelf.className]}>
    {shelf.tamanhos}
  </container.Main>
