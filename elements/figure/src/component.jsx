import h from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style'

export default (props, children) =>
  <figure className={[style.figure, props.className]}>
    <Picture alt={props.alt} circular:isTruthy={props.circular}>
      {children.sources}
    </Picture>
    <figcaption>
      {children.caption}
    </figcaption>
  </figure>
