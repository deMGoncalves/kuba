import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <ui.Hero color='inverse' direction='reverse'>
    <ui.Sources slot='figure' {...props} />
    <Fragment slot='caption'>
      <hgroup>
        <ui.Heading level='2' className={style.banner__h2} size='small' {...props}>{props.subtitle}</ui.Heading>
        <ui.Heading level='1' className={style.banner__h1} {...props}>{props.title}</ui.Heading>
      </hgroup>
      <p className={style.banner__p}><date>{props.date}</date> by {props.author}</p>
      <p className={style.banner__p}>{props.description}</p>
      <ui.LinkButton className={style.banner__linkButton} color='inverse' href={props.url}>Read story</ui.LinkButton>
    </Fragment>
  </ui.Hero>
