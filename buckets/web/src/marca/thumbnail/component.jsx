import h from '@kuba/h'
import Picture from '@kuba/picture'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (thumbnail) =>
  <section className={style.marca__logo} onClick={() => thumbnail.redirect()}>
    <Picture className={style.marca__picture}>
      <Show when={thumbnail.logo}>
        <source srcSet={thumbnail.logo} />
      </Show>
    </Picture>
    <div className={style.marca__div}>
      <text.Strong master dark xxxs regular>{thumbnail.nome}</text.Strong>
    </div>
  </section>
