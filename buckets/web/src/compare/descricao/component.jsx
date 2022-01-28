import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (descricao) =>
  <section className={style.descricao}>
    <text.P className={style.descricao__p} master xxxs>{descricao.valor}</text.P>
  </section>
