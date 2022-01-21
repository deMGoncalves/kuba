import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import Concave from './concave'
import Lixa from './lixa'
import Nose from './nose'
import style from './style'
import Tail from './tail'
import Tamanho from './tamanho'
import Wheelbase from './wheelbase'

export default () =>
  <container.Section className={style.especificacao}>
    <text.H2 className={style.especificacao__h2} master darker xs medium>Especificação</text.H2>
    <div className={style.especificacao__div}>
      <Tamanho />
      <Wheelbase />
      <Nose />
      <Tail />
      <Concave />
      <Lixa />
    </div>
  </container.Section>
