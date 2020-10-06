import h, { Show } from '@rex/h'
import Picture from '@rex/kit/src/picture'
import style from './style.css'

export default (props, children) =>
  <figure className={[style.banner, style[props.color], style[props.direction], props.className]}>
    <Picture className={style.banner__picture} alt={props.alt}>
      {children.source}
    </Picture>
    <figcaption className={style.banner__figcaption}>
      <Show if={children.title}>{children.title}</Show>
      <Show if={children.author}>{children.author}</Show>
      <Show if={children.description}>{children.description}</Show>
      <Show if={children.link}>{children.link}</Show>
    </figcaption>
  </figure>
