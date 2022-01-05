import h from '@kuba/h'
import Picture from '@kuba/picture'
import text from '@kuba/text'
import style from './style'

export default (marca) =>
  <section className={style.marca}>
    <Picture className={style.marca__picture} />
    <div className={style.marca__div}>
      <text.Strong master dark xxxs regular>{marca.nome}</text.Strong>
    </div>
  </section>
