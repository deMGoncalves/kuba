import h from '@kuba/h'
import Picture from '@kuba/picture'
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
      <text.P>{thumbnail.desc}</text.P>
    </figcaption>
  </figure>
