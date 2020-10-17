import h, { Fragment } from '@rex/h'
import * as f from '@rex/f'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <ui.Hero {...props}>
    <ui.Sources slot='figure' iterator={props.sources} />
    <Fragment slot='caption'>
      <ui.Heading className={style.hero__heading} {...props}>{props.title}</ui.Heading>
      <ui.P className={style.hero__p} {...props}>{props.description}</ui.P>
      <ui.Link className={style.hero__link} icon='arrow' {...props}>{props.link}</ui.Link>
    </Fragment>
  </ui.Hero>
