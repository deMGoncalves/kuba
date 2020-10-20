import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <ui.Hero {...schema}>
    <ui.Sources slot='figure' {...schema} />
    <Fragment slot='caption'>
      <ui.Heading className={style.hero__heading} {...schema}>{schema.title}</ui.Heading>
      <ui.P className={style.hero__p} {...schema}>{schema.description}</ui.P>
    </Fragment>
  </ui.Hero>
