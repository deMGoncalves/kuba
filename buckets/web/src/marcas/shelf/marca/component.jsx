import h from '@kuba/h'
import Picture from '@kuba/picture'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (marca) =>
  <section className={style.marca} onClick={() => marca.redirect()}>
    <Picture className={style.marca__picture}>
      <Show when={marca.thumbnail}>
        <source srcSet={marca.thumbnail} />
      </Show>
    </Picture>
    <div className={style.marca__div}>
      <text.Strong master dark xxxs regular>{marca.nome}</text.Strong>
    </div>
  </section>
