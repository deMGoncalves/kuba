import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import style from './style'

export default (descricao) =>
  <container.Section className={style.descricao}>
    <text.P className={style.descricao__p} master xxxs>{descricao.valor}</text.P>
  </container.Section>
