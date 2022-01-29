import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import View from '@kuba/view'
import Concave from './concave'
import Descricao from './descricao'
import Material from './material'
import Modelo from './modelo'
import Nose from './nose'
import style from './style'
import Tail from './tail'
import Tamanho from './tamanho'
import Thumbnail from './thumbnail'
import Wheelbase from './wheelbase'

export default () =>
  <View>
    <container.Div className={style.compare__div} slot='main'>
      <Modelo master />
      <Modelo />
      <Thumbnail />
      <Descricao />
      <Tamanho />
      <Wheelbase />
      <hgroup className={style.compare__hgroup}>
        <text.H2 className={style.compare__h2} master darker xs bold>Nose</text.H2>
        <text.P className={style.compare__p} master xxxs>Parte frontal inclinada do shape</text.P>
      </hgroup>
      <Nose master />
      <Nose />
      <hgroup className={style.compare__hgroup}>
        <text.H2 className={style.compare__h2} master darker xs bold>Tail</text.H2>
        <text.P className={style.compare__p} master xxxs>Parte traseira inclinada do shape</text.P>
      </hgroup>
      <Tail master />
      <Tail />
      <hgroup className={style.compare__hgroup}>
        <text.H2 className={style.compare__h2} master darker xs bold>Concave</text.H2>
        <text.P className={style.compare__p} master xxxs>Inclinação simétrica das laterais do shape</text.P>
      </hgroup>
      <Concave master />
      <Concave />
      <hgroup className={style.compare__hgroup}>
        <text.H2 className={style.compare__h2} master darker xs bold>Material</text.H2>
      </hgroup>
      <Material master />
      <Material />
    </container.Div>
  </View>
