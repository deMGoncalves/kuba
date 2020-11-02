import h, { Fragment } from '@rex/h'
import * as ui from '@ui'
import style from './style.css'

export default (props) =>
  <ui.Hero {...props}>
    <ui.Sources slot='figure' {...props} />
    <Fragment slot='caption'>
      <ui.Heading className={style.hero__heading} {...props}>{props.title}</ui.Heading>
      <ui.P className={style.hero__p} {...props}>{props.description}</ui.P>
      <ui.Link className={style.hero__link} {...props}>{props.link}</ui.Link>
    </Fragment>
  </ui.Hero>
