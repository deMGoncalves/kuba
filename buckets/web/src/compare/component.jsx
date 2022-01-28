import h from '@kuba/h'
import container from '@kuba/container'
import View from '@kuba/view'
import Descricao from './descricao'
import Modelo from './modelo'
import style from './style'
import Thumbnail from './thumbnail'

export default () =>
  <View>
    <container.Div className={style.compare__div} slot='main'>
      <Modelo master />
      <Modelo />
      <Thumbnail master />
      <Thumbnail />
      <Descricao master />
      <Descricao />
    </container.Div>
  </View>
