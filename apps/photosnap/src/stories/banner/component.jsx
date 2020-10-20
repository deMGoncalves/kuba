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
      <ui.P className={style.banner__p} {...props}>
        <date>{props.date}</date> by {props.author}
      </ui.P>
      <ui.P className={style.banner__p} {...props}>{props.description}</ui.P>
      <ui.Link className={style.banner__linkButton} {...props}>{props.link}</ui.Link>
    </Fragment>
  </ui.Hero>
