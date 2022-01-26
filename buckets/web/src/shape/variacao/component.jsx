import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import style from './style'
import Tamanho from './tamanho'
import Wheelbase from './wheelbase'

export default () =>
  <container.Section className={style.variacao}>
    <text.H2 className={style.variacao__h2} master darker xs medium>Tamanho</text.H2>
    <div className={style.variacao__div}>
      <Tamanho />
      <Wheelbase />
    </div>
  </container.Section>
