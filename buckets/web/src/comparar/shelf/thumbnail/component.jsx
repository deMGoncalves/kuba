import h from '@kuba/h'
import Helper from '@kuba/help'
import Hide from '@kuba/hide'
import Picture from '@kuba/picture'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (thumbnail) =>
  <figure className={style.thumbnail}>
    <Picture className={style.thumbnail__picture} alt={thumbnail.alt}>
      <source srcSet={thumbnail.src} />
    </Picture>
    <figcaption className={style.thumbnail__caption}>
      <text.Span xs>{thumbnail.marca}</text.Span>
      <text.Strong master darker medium sm>{thumbnail.alt}</text.Strong>
      <Show when={thumbnail.opened}>
        <text.Span className={style.thumbnail__mobile} master darker medium>
          Descrição do produto:
          <Helper text={thumbnail.desc} className={style.thumbnail__helper}/>
        </text.Span>
      </Show>
      <Hide when={thumbnail.opened}>
        <text.P>{thumbnail.desc}</text.P>
      </Hide>
    </figcaption>
  </figure>
