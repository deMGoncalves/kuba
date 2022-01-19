import h from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style'

export default (props, children) =>
  <figure className={[style.figure, props.className]} onClick={props.onClick}>
    <Picture alt={props.alt} circular={props.circular} height={props.height} width={props.width}>
      {children.sources}
    </Picture>
    <figcaption>
      {children.caption}
    </figcaption>
  </figure>
