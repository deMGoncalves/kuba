import h from '@kuba/h'
import container from '@kuba/container'
import style from './style'

export default (shelf) =>
  <container.Main uid='shelf' className={style.shelf}>
    {shelf.tamanhos}
  </container.Main>
