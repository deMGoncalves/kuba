import h from '@kuba/h'
import container from '@kuba/container'
import style from './style'
import text from '@kuba/text'

export default (descricao) =>
  <container.Section className={style.descricao}>
    <text.H2 className={style.descricao__h2} master darker sm bold>Sobre a marca</text.H2>
    <text.P className={style.descricao__p} master xxxs>{descricao.valor}</text.P>
  </container.Section>
