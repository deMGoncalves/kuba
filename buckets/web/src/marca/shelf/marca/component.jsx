import h from '@kuba/h'
import Picture from '@kuba/picture'
import text from '@kuba/text'
import style from './style'

export default (marca) =>
  <section className={style.marca}>
    <Picture className={style.marca__picture} />
    <text.Strong className={style.marca__text} master dark xxxs regular>{marca.nome}</text.Strong>
  </section>
