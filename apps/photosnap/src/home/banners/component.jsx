import h, { Fragment } from '@rex/h'
import * as f from '@rex/f'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <ui.Hero {...props}>
    <Fragment slot='source'>
      <source srcSet={f.prop('[0]', props.sources)} media='(max-width: 767px)' />
      <source srcSet={f.prop('[1]', props.sources)} media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet={f.prop('[2]', props.sources)} media='(min-width: 960px)' />
    </Fragment>
    <h1 slot='title' className={[style.banner__h1, style[props.color]]}>{props.title}</h1>
    <p slot='description' className={[style.banner__p, style[props.color]]}>{props.description}</p>
    <ui.LinkButton slot='link' className={style.banner__linkButton} color={props.color} href={props.url}>Read story</ui.LinkButton>
  </ui.Hero>
