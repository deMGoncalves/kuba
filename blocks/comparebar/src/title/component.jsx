import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import style from './style'

export default () =>
  <container.Div className={style.title}>
    <text.Strong className={style.title__strong} master darker xxxs>Comparar</text.Strong>
    <text.P className={style.title__p} master darker xs medium>Selecione dois shapes para fazer uma comparacao</text.P>
  </container.Div>
