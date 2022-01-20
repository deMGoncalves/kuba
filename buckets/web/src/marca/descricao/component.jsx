import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import style from './style'

export default (descricao) =>
  <container.Section>
    <text.P className={style.descricao} master xxxs>{descricao.valor}</text.P>
  </container.Section>
