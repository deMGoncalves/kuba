import h from '@kuba/h'
import Picture from '@kuba/picture'
import text from '@kuba/text'
import style from './style'

export default (shape) =>
  <figure className={style.shape__figure}>
    <Picture>
      <source srcSet={shape.thumbnail} />
    </Picture>
    <text.Figcaption className={style.shape__caption}>
      <text.Span master darkest xxxs bold>{shape.modelo}</text.Span>
    </text.Figcaption>
  </figure>
