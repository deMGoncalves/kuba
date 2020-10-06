import h, { Fragment } from '@rex/h'
import * as f from '@rex/f'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <ui.Hero color='inverse' direction='reverse'>
    <Fragment slot='source'>
      <source srcSet={f.prop('[0]', props.sources)} media='(max-width: 767px)' />
      <source srcSet={f.prop('[1]', props.sources)} media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet={f.prop('[2]', props.sources)} media='(min-width: 960px)' />
    </Fragment>
    <Fragment slot='caption'>
      <hgroup>
        <h2 className={style.banner__h2}>{props.subtitle}</h2>
        <h1 className={style.banner__h1}>{props.title}</h1>
      </hgroup>
      <p className={style.banner__p}><date>{props.date}</date> by {props.author}</p>
      <p className={style.banner__p}>{props.description}</p>
      <ui.LinkButton className={style.banner__linkButton} color='inverse' href={props.url}>Read story</ui.LinkButton>
    </Fragment>
  </ui.Hero>
